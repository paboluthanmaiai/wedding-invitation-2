import { NextResponse } from "next/server";

interface RSVPData {
  guestName: string;
  attendees: number;
  attendance: "attending" | "declined";
  eventsAttending?: string[];
  message?: string;
  timestamp: string;
}

// In-memory persistent RSVP store for current instance
const rsvpStore: RSVPData[] = [];

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { guestName, attendees, attendance, eventsAttending, message } = body;

    // Validate required fields
    if (!guestName || typeof guestName !== "string" || guestName.trim().length === 0) {
      return NextResponse.json(
        { success: false, error: "Please enter your name." },
        { status: 400 }
      );
    }

    if (!attendees || Number(attendees) < 1) {
      return NextResponse.json(
        { success: false, error: "Please specify at least 1 attendee." },
        { status: 400 }
      );
    }

    if (!attendance || !["attending", "declined"].includes(attendance)) {
      return NextResponse.json(
        { success: false, error: "Please indicate whether you will be attending." },
        { status: 400 }
      );
    }

    const newRsvp: RSVPData = {
      guestName: guestName.trim(),
      attendees: Number(attendees),
      attendance: attendance as "attending" | "declined",
      eventsAttending: Array.isArray(eventsAttending) ? eventsAttending : [],
      message: typeof message === "string" ? message.trim() : "",
      timestamp: new Date().toISOString(),
    };

    rsvpStore.push(newRsvp);

    return NextResponse.json({
      success: true,
      message: attendance === "attending"
        ? `Thank you, ${newRsvp.guestName}! We are thrilled to celebrate with you.`
        : `Thank you for letting us know, ${newRsvp.guestName}. You will be warmly missed.`,
      rsvp: newRsvp,
      totalResponses: rsvpStore.length,
    });
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : "Internal Server Error";
    return NextResponse.json(
      { success: false, error: errorMsg },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    success: true,
    count: rsvpStore.length,
  });
}
