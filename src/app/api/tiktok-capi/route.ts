import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Chuẩn bị payload TikTok Events API
    const payload = {
      pixel_code: process.env.TIKTOK_PIXEL_ID, // Pixel ID
      event: body.event_name || "ClickAffiliate",
      timestamp: Math.floor(Date.now() / 1000),
      context: {
        user: {
          user_agent: body.user_agent,
          ip: req.headers.get("x-forwarded-for") || "127.0.0.1",
        },
        page: {
          url: body.page_location,
          referrer: body.referrer || "",
        }
      },
      properties: {
        affiliate_name: body.affiliate_name,
        affiliate_url: body.affiliate_url,
        affiliate_position: body.affiliate_position,
        affiliate_category: body.affiliate_category,
      },
    };

    const response = await fetch("https://business-api.tiktokglobalshop.com/open_api/v1.3/pixel/track/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Token": process.env.TIKTOK_ACCESS_TOKEN!, // từ TikTok Events Manager
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();
    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("TikTok CAPI error:", error);
    return NextResponse.json({ success: false, error }, { status: 500 });
  }
}
