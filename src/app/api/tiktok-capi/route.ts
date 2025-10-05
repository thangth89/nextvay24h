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

    // MINIMAL format - chỉ những field bắt buộc
    const eventData = {
      pixel_code: pixelId,
      event: "ViewContent", // Standard event
      timestamp: new Date().toISOString(),
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
      // Log chi tiết để debug
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

    return NextResponse.json({ success: true, data: result });
  } catch (err) {
    console.error("💥 Exception:", err);
    return NextResponse.json(
      { error: "Exception", message: String(err) },
      { status: 200 }
    );
  }
}
