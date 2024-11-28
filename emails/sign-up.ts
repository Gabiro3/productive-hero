import nodemailer from "nodemailer";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

/**
 * Sends a welcome email to the user.
 * @param toEmail - The recipient's email address.
 * @param userName - The recipient's name.
 */
export const sendWelcomeEmail = async (toEmail: string, userName: string): Promise<void> => {
  try {
    // Create transporter using SMTP credentials
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: 587, // Commonly used SMTP port
      secure: false, // Use true if port is 465
      auth: {
        user: process.env.SMTP_USER, // SMTP username
        pass: process.env.SMTP_PASS, // SMTP password
      },
    });

    // Verify SMTP connection
    await transporter.verify();
    console.log("SMTP connection established.");

    // Send email
    const mailOptions = {
      from: `"Schoolie Team" <${process.env.SMTP_USER}>`, // Sender address
      to: toEmail, // Recipient address
      subject: "Welcome to Schoolie!", // Subject line
      text: `Hello ${userName},\n\nWelcome to Schoolie! We're excited to have you on board.`, // Plain text body
      html: `<p>Hello <b>${userName}</b>,</p><p>Welcome to <b>Schoolie</b>! We're excited to have you on board.</p>`, // HTML body
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent successfully: %s", info.messageId);
  } catch (error) {
    console.error("Failed to send email:", error);
    throw new Error("Email sending failed.");
  }
};
