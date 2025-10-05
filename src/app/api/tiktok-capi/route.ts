import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const accessToken = process.env.TIKTOK_ACCESS_TOKEN;
    const pixelId = process.env.TIKTOK_PIXEL_ID;

    if (!accessToken || !pixelId) {
      return NextResponse.json(
        { error: "Missing credentials" },
        { status: 500 }
      );
    }

    const url = `https://business-api.tiktok.com/open_api/v1.3/event/track/`;

    // Minimal required fields
    const eventData = {
      pixel_code: pixelId,
      event: "ClickButton",
      timestamp: new Date().toISOString(),
      context: {
        page: {
          url: body.page_location || window.location?.href || "",
        },
        user_agent: req.headers.get("user-agent") || "",
      },
      properties: {
        content_name: body.affiliate_name || "Click",
      },
    };

    console.log("=== TikTok Request ===");
    console.log("URL:", url);
    console.log("Pixel ID:", pixelId);
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
    
    console.log("=== TikTok Response ===");
    console.log("Status:", response.status);
    console.log("Result:", JSON.stringify(result, null, 2));

    if (!response.ok) {
      return NextResponse.json(
        { 
          error: "TikTok API failed", 
          status: response.status,
          details: result 
        },
        { status: 200 } // Trả 200 để không break client
      );
    }

    return NextResponse.json({ success: true, data: result });
  } catch (err) {
    console.error("TikTok CAPI Error:", err);
    return NextResponse.json(
      { error: String(err) },
      { status: 200 } // Trả 200 để không break client
    );
  }
}
