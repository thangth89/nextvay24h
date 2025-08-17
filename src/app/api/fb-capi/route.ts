import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const accessToken = process.env.FB_ACCESS_TOKEN;
    const pixelId = process.env.FB_PIXEL_ID;

    const url = `https://graph.facebook.com/v19.0/${pixelId}/events?access_token=${accessToken}`;

    const eventData = {
      data: [
        {
          event_name: "ClickAffiliate",
          event_time: Math.floor(Date.now() / 1000),
          action_source: "website",
          event_source_url: body.page_location,
          user_data: {
            client_ip_address: req.ip ?? body.ip,
            client_user_agent: req.headers.get("user-agent") ?? body.user_agent,
            fbp: body.fbp,
            fbc: body.fbc,
          },
          custom_data: {
            affiliate_name: body.affiliate_name,
            affiliate_url: body.affiliate_url,
            affiliate_position: body.affiliate_position,
            affiliate_category: body.affiliate_category,
          },
        },
      ],
    };

    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(eventData),
    });

    const result = await response.json();
    return NextResponse.json(result);
  } catch (err) {
    console.error("Error sending CAPI event:", err);
    return NextResponse.json({ error: "Failed to send event" }, { status: 500 });
  }
}
