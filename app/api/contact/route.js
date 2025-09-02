import { sendEmail } from "@/app/api/utils/send-email";

export async function POST(request) {
  try {
    const { name, email, message } = await request.json();

    // Validate required fields
    if (!name || !email || !message) {
      return Response.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    // Send email to crowntechnologies@gmail.com
    await sendEmail({
      to: "crowntechnologies@gmail.com",
      from: "onboarding@resend.dev", // Default sender
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
      text: `New Contact Form Submission\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`
    });

    return Response.json({ success: true, message: "Message sent successfully!" });
  } catch (error) {
    console.error("Contact form error:", error);
    
    if (error.message && error.message.includes("API key")) {
      return Response.json(
        { 
          error: "Email service not configured. Please add your RESEND_API_KEY to your environment variables.",
          details: "Visit https://www.create.xyz/docs/integrations/resend for setup instructions."
        },
        { status: 500 }
      );
    }

    return Response.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }
}