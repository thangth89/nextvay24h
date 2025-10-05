import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const accessToken = process.env.TIKTOK_ACCESS_TOKEN;
    const pixelId = process.env.TIKTOK_PIXEL_ID;

    if (!accessToken || !pixelId) {
      return NextResponse.json({ error: "Missing credentials" }, { status: 500 });
    }

    const url = `https://business-api.tiktok.com/open_api/v1.3/event/track/`;

    // Get user IP
    const ipAddress = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
                     req.headers.get("x-real-ip") ||
                     "";
    
    const userAgent = req.headers.get("user-agent") || "";

    // CORRECT format với event_source và event_source_id
    const eventData = {
      pixel_code: pixelId,
      event: "ViewContent", // Standard TikTok event
      event_id: `evt_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      timestamp: new Date().toISOString(),
      event_source: "web", // REQUIRED: web, app, or offline
      event_source_id: pixelId, // REQUIRED: pixel_code
      context: {
        page: {
          url: body.page_location || "",
        },
        user_agent: userAgent,
        ip: ipAddress,
      },
      properties: {
        content_type: "product",
        content_name: body.affiliate_name || "Affiliate Click",
      },
    };

    console.log("📤 Sending to TikTok:");
    console.log("Endpoint:", url);
    console.log("Pixel:", pixelId);
    console.log("Payload:", JSON.stringify(eventData, null, 2));

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Token": accessToken,
      },
      body: JSON.stringify(eventData),
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
