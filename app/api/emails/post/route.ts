import { NextResponse } from "next/server";
import { sendWelcomeEmail } from "@/emails/sign-up";

export const POST = async (request: Request) => {
  try {
    // Parse the request body
    const { email, name } = await request.json();

    // Validate the input
    if (!email || !name) {
      return NextResponse.json(
        { error: "Email and name are required" },
        { status: 400 }
      );
    }

    // Call the sendWelcomeEmail function
    await sendWelcomeEmail(email, name);

    // Respond with success
    return NextResponse.json(
      { message: "Welcome email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending welcome email:", error);

    // Handle errors
    return NextResponse.json(
      { error: "Failed to send welcome email" },
      { status: 500 }
    );
  }
};
