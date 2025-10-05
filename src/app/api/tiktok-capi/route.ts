import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const accessToken = process.env.TIKTOK_ACCESS_TOKEN;
    const pixelId = process.env.TIKTOK_PIXEL_ID;

    if (!accessToken || !pixelId) {
      return NextResponse.json(
        { error: "Missing TikTok credentials" },
        { status: 500 }
      );
    }

    // Hash email/phone nếu có (TikTok yêu cầu SHA256)
    const hashData = (data: string | undefined) => {
      if (!data) return undefined;
      return crypto.createHash('sha256').update(data.toLowerCase().trim()).digest('hex');
    };

    const url = `https://business-api.tiktok.com/open_api/v1.3/event/track/`;

    const eventData = {
      pixel_code: pixelId,
      event: "ClickButton", // TikTok custom event name
      event_id: `${Date.now()}_${Math.random().toString(36).substr(2, 9)}`, // unique event ID
      timestamp: new Date().toISOString(),
      context: {
        ad: {
          callback: body.ttclid || undefined, // TikTok click ID từ URL
        },
        page: {
          url: body.page_location,
          referrer: body.referrer || "",
        },
        user: {
          external_id: body.external_id ? hashData(body.external_id) : undefined,
          email: body.email ? hashData(body.email) : undefined,
          phone_number: body.phone ? hashData(body.phone) : undefined,
          ttp: body.ttp, // TikTok cookie _ttp
        },
        ip: req.headers.get("x-forwarded-for")?.split(",")[0] ||
            req.headers.get("x-real-ip") ||
            body.ip ||
            "0.0.0.0",
        user_agent: req.headers.get("user-agent") || body.user_agent,
      },
      properties: {
        content_type: "product",
        content_name: body.affiliate_name,
        content_category: body.affiliate_category || "referral_apps",
        contents: [
          {
            content_id: body.affiliate_name?.toLowerCase().replace(/\s+/g, '_'),
            content_name: body.affiliate_name,
          }
        ],
        value: 1,
        currency: "VND",
        // Custom properties
        affiliate_url: body.affiliate_url,
        affiliate_position: body.affiliate_position,
      },
    };

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Token": accessToken,
      },
      body: JSON.stringify(eventData),
    });

    const result = await response.json();
    
    if (!response.ok) {
      console.error("TikTok API Error:", result);
      return NextResponse.json(
        { error: "TikTok API request failed", details: result },
        { status: response.status }
      );
    }

    return NextResponse.json(result);
  } catch (err) {
    console.error("Error sending TikTok CAPI event:", err);
    return NextResponse.json(
      { error: "Failed to send TikTok event" },
      { status: 500 }
    );
  }
}