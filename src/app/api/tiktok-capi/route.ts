import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const accessToken = process.env.TIKTOK_ACCESS_TOKEN;
    const pixelId = process.env.TIKTOK_PIXEL_ID;

    if (!accessToken || !pixelId) {
      console.error("Missing TikTok credentials");
      return NextResponse.json(
        { error: "Missing TikTok credentials" },
        { status: 500 }
      );
    }

    // Hash data theo chuẩn TikTok (SHA256)
    const hashData = (data: string | undefined) => {
      if (!data) return undefined;
      return crypto.createHash('sha256').update(data.toLowerCase().trim()).digest('hex');
    };

    const url = `https://business-api.tiktok.com/open_api/v1.3/event/track/`;

    // Lấy IP address
    const ipAddress = req.headers.get("x-forwarded-for")?.split(",")[0] ||
                     req.headers.get("x-real-ip") ||
                     body.ip ||
                     "";

    const userAgent = req.headers.get("user-agent") || body.user_agent || "";

    // TikTok Events API payload format
    const eventData = {
      pixel_code: pixelId,
      event: "ClickButton",
      event_id: `${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      timestamp: new Date().toISOString(),
      context: {
        ad: {
          callback: body.ttclid || undefined,
        },
        page: {
          url: body.page_location || "",
          referrer: body.referrer || "",
        },
        user: {
          // Chỉ gửi nếu có dữ liệu
          ...(body.external_id && { external_id: hashData(body.external_id) }),
          ...(body.email && { email: hashData(body.email) }),
          ...(body.phone && { phone_number: hashData(body.phone) }),
          ...(body.ttp && { ttp: body.ttp }),
        },
        ip: ipAddress,
        user_agent: userAgent,
      },
      properties: {
        content_type: "product",
        content_name: body.affiliate_name || "Unknown",
        content_category: body.affiliate_category || "referral_apps",
        contents: [
          {
            content_id: body.affiliate_name?.toLowerCase().replace(/\s+/g, '_') || "unknown",
            content_name: body.affiliate_name || "Unknown",
          }
        ],
        value: 1,
        currency: "VND",
      },
    };

    // Log để debug
    console.log("Sending to TikTok:", JSON.stringify(eventData, null, 2));

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Token": accessToken,
      },
      body: JSON.stringify(eventData),
    });

    const result = await response.json();
    
    // Log response để debug
    console.log("TikTok Response:", JSON.stringify(result, null, 2));

    if (!response.ok) {
      console.error("TikTok API Error:", result);
      return NextResponse.json(
        { 
          error: "TikTok API request failed", 
          details: result,
          status: response.status 
        },
        { status: response.status }
      );
    }

    return NextResponse.json({ success: true, data: result });
  } catch (err) {
    console.error("Error sending TikTok CAPI event:", err);
    return NextResponse.json(
      { error: "Failed to send TikTok event", details: String(err) },
      { status: 500 }
    );
  }
}
