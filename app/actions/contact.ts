"use server";

import { Resend } from "resend";
import { z } from "zod";

const ContactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().optional(),
  country: z.string().optional(),
  product: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type ContactFormState = {
  success: boolean;
  message: string;
  errors?: Record<string, string>;
};

export async function submitContactForm(
  prevState: ContactFormState | null,
  formData: FormData,
): Promise<ContactFormState> {
  const rawData = {
    name: formData.get("name")?.toString() ?? "",
    email: formData.get("email")?.toString() ?? "",
    company: formData.get("company")?.toString() ?? "",
    country: formData.get("country")?.toString() ?? "",
    product: formData.get("product")?.toString() ?? "",
    message: formData.get("message")?.toString() ?? "",
  };

  const validation = ContactFormSchema.safeParse(rawData);

  if (!validation.success) {
    const errors: Record<string, string> = {};
    validation.error.issues.forEach((issue) => {
      const field = issue.path[0]?.toString() ?? "form";
      errors[field] = issue.message;
    });
    return {
      success: false,
      message: "Please fix the errors below",
      errors,
    };
  }

  const data = validation.data;
  const apiKey = process.env.RESEND_API_KEY;
  const recipient = process.env.CONTACT_RECIPIENT_EMAIL ?? "wangxujun0516@gmail.com";

  if (!apiKey) {
    console.error("RESEND_API_KEY is not configured");
    return {
      success: false,
      message: "Email service is not configured. Please email us directly.",
    };
  }

  const resend = new Resend(apiKey);

  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background: #0a2540; color: white; padding: 20px; text-align: center;">
        <h1 style="margin: 0;">New Quote Request</h1>
      </div>
      <div style="background: #f7fafc; padding: 20px;">
        <h2 style="color: #0a2540; margin-top: 0;">Customer Information</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #0a2540; width: 30%;">Name:</td>
            <td style="padding: 8px 0; color: #2d3748;">${data.name}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #0a2540;">Email:</td>
            <td style="padding: 8px 0; color: #2d3748;"><a href="mailto:${data.email}">${data.email}</a></td>
          </tr>
          ${data.company ? `<tr><td style="padding: 8px 0; font-weight: bold; color: #0a2540;">Company:</td><td style="padding: 8px 0; color: #2d3748;">${data.company}</td></tr>` : ""}
          ${data.country ? `<tr><td style="padding: 8px 0; font-weight: bold; color: #0a2540;">Country:</td><td style="padding: 8px 0; color: #2d3748;">${data.country}</td></tr>` : ""}
          ${data.product ? `<tr><td style="padding: 8px 0; font-weight: bold; color: #0a2540;">Product Interest:</td><td style="padding: 8px 0; color: #2d3748;">${data.product}</td></tr>` : ""}
        </table>
        <h2 style="color: #0a2540;">Message</h2>
        <div style="background: white; padding: 15px; border-left: 4px solid #ff6b35; white-space: pre-wrap;">${data.message}</div>
      </div>
      <div style="background: #0a2540; color: #a0aec0; padding: 15px; text-align: center; font-size: 12px;">
        <p style="margin: 0;">Henghong Intelligent Equipment Co., Ltd.</p>
        <p style="margin: 5px 0 0 0;">This email was sent from the website contact form.</p>
      </div>
    </div>
  `;

  try {
    const { error } = await resend.emails.send({
      from: "Henghong Website <onboarding@resend.dev>",
      to: recipient,
      replyTo: data.email,
      subject: `New Quote Request from ${data.name}${data.company ? ` (${data.company})` : ""}`,
      html,
    });

    if (error) {
      console.error("Resend error:", error);
      return {
        success: false,
        message: "Failed to send email. Please try again or email us directly.",
      };
    }

    return {
      success: true,
      message: "Thank you! Your message has been sent successfully. We will get back to you within 24 hours.",
    };
  } catch (err) {
    console.error("Unexpected error:", err);
    return {
      success: false,
      message: "An unexpected error occurred. Please try again later.",
    };
  }
}
