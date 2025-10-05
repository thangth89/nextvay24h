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

    // Get user info
    const ipAddress = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "";
    const userAgent = req.headers.get("user-agent") || "";

    // Format đúng theo TikTok Events API v1.3
    const payload = {
      pixel_code: pixelId,
      data: [
        {
          event: "ViewContent",
          event_id: `evt_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
          timestamp: new Date().toISOString(),
          context: {
            page: {
              url: body.page_location || "",
            },
            user: {
              user_agent: userAgent,
              ip: ipAddress,
            },
          },
          properties: {
            content_type: "product",
            content_name: body.affiliate_name || "Affiliate Click",
          },
        }
      ]
    };

    console.log("📤 Sending to TikTok:");
    console.log("Endpoint:", url);
    console.log("Pixel:", pixelId);
    console.log("Token (first 10):", accessToken.substring(0, 10) + "...");
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
