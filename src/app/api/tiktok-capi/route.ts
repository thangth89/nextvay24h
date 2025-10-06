import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const TIKTOK_PIXEL_ID = process.env.TIKTOK_PIXEL_ID;
    const TIKTOK_ACCESS_TOKEN = process.env.TIKTOK_ACCESS_TOKEN;

    if (!TIKTOK_PIXEL_ID || !TIKTOK_ACCESS_TOKEN) {
      console.error("❌ Missing TikTok credentials:", {
        TIKTOK_PIXEL_ID,
        hasToken: !!TIKTOK_ACCESS_TOKEN,
      });
      return NextResponse.json(
        { error: "Missing TikTok credentials (PIXEL_ID / ACCESS_TOKEN)" },
        { status: 500 }
      );
    }

    const payload = {
      pixel_code: TIKTOK_PIXEL_ID,
      event: body.event_name || "ClickAffiliate",
      event_id: `${Date.now()}_${Math.random().toString(36).substring(2, 10)}`,
      timestamp: Math.floor(Date.now() / 1000),
      context: {
        user: {
          user_agent: body.user_agent || req.headers.get("user-agent"),
          ip: req.headers.get("x-forwarded-for")?.split(",")[0] || "127.0.0.1",
          external_id: body.ttp || undefined, // TikTok _ttp cookie
          ttclid: body.ttclid || undefined,   // TikTok Click ID
        },
        page: {
          url: body.page_location,
          referrer: body.referrer || "",
        },
      },
      properties: {
        affiliate_name: body.affiliate_name,
        affiliate_url: body.affiliate_url,
        affiliate_position: body.affiliate_position,
        affiliate_category: body.affiliate_category,
      },
    };

    console.log("📩 Payload gửi TikTok:", JSON.stringify(payload, null, 2));

    const response = await fetch(
      "https://business-api.tiktokglobalshop.com/open_api/v1.3/pixel/track/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Token": TIKTOK_ACCESS_TOKEN,
        },
        body: JSON.stringify(payload),
      }
    );

    const text = await response.text(); // để xem raw TikTok trả về
    console.log("📤 TikTok Response:", response.status, text);

    let data: unknown = {};
    try {
      data = JSON.parse(text);
    } catch {
      data = { raw: text };
    }

    return NextResponse.json({ success: true, status: response.status, data });
  } catch (error: unknown) {
    console.error("❌ TikTok CAPI error:", error);
    return NextResponse.json({ success: false, error: error.message || error }, { status: 500 });
  }
}
