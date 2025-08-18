// lib/email.js
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendFormSubmissionEmail(formType, data) {
  try {
    await resend.emails.send({
      from: "forms@letirealty.com",
      to: "admin@yourdomain.com",
      subject: `New ${formType} Submission`,
      html: `
        <h1>New ${formType} Submission</h1>
        ${Object.entries(data)
          .map(
            ([key, value]) => `
            <p><strong>${key}:</strong> ${value || "N/A"}</p>
          `
          )
          .join("")}
        <p>Received at: ${new Date().toLocaleString()}</p>
      `,
    });
  } catch (error) {
    console.error("Email sending failed:", error);
  }
}
