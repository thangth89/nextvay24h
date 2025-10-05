import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const accessToken = process.env.TIKTOK_ACCESS_TOKEN;
    const pixelId = process.env.TIKTOK_PIXEL_ID;

    if (!accessToken || !pixelId) {
      return NextResponse.json({ error: "Missing credentials" }, { status: 500 });
    }

    const url = `https://business-api.tiktok.com/open_api/v1.3/event/track/`;

    // Get user info
    const ipAddress = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "";
    const userAgent = req.headers.get("user-agent") || "";

    // event_source_id phải là external_id (hashed user identifier)
    // Vì không có user login, dùng combination của IP + timestamp làm unique ID
    const eventSourceId = crypto
      .createHash('sha256')
      .update(`${ipAddress}_${Date.now()}`)
      .digest('hex')
      .substring(0, 32); // Giới hạn 32 ký tự

    // Format CHÍNH XÁC theo TikTok Events API v1.3
    const payload = {
      pixel_code: pixelId,
      data: [
        {
          event: "ViewContent",
          event_id: `evt_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
          timestamp: new Date().toISOString(),
          event_source: "web", // BẮT BUỘC: web, app, hoặc offline
          context: {
            page: {
              url: body.page_location || "",
            },
            user: {
              external_id: eventSourceId, // Hashed user identifier
              ...(ipAddress && { ip: ipAddress }),
              ...(userAgent && { user_agent: userAgent }),
            },
          },
          properties: {
            content_type: "product",
            content_name: body.affiliate_name || "Affiliate Click",
          },
        }
      ],
      event_source_id: eventSourceId, // QUAN TRỌNG: phải match với external_id
    };

    console.log("📤 Sending to TikTok:");
    console.log("Endpoint:", url);
    console.log("Pixel:", pixelId);
    console.log("Event Source ID:", eventSourceId);
    console.log("Payload:", JSON.stringify(payload, null, 2));

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Token": accessToken,
      },
      body: JSON.stringify(payload),
    });

    const result = await response.json();
    
    console.log("📥 TikTok Response:");
    console.log("Status:", response.status);
    console.log("Body:", JSON.stringify(result, null, 2));

    if (!response.ok) {
      console.error("❌ Error Details:");
      console.error("- Code:", result.code);
      console.error("- Message:", result.message);
      console.error("- Request ID:", result.request_id);
      
      return NextResponse.json(
        { 
          error: "TikTok API failed", 
          status: response.status,
          code: result.code,
          message: result.message,
          request_id: result.request_id,
          full_response: result 
        },
        { status: 200 }
      );
    }

    console.log("✅ TikTok event sent successfully!");
    return NextResponse.json({ success: true, data: result });
  } catch (err) {
    console.error("💥 Exception:", err);
    return NextResponse.json(
      { error: "Exception", message: String(err) },
      { status: 200 }
    );
  }
}
