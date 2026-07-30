"use server";

import { z } from "zod";

const NewsletterSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

export type NewsletterState = {
  success: boolean;
  message: string;
  errors?: Record<string, string>;
};

export async function subscribeNewsletter(
  prevState: NewsletterState | null,
  formData: FormData,
): Promise<NewsletterState> {
  const email = formData.get("email")?.toString() ?? "";

  const validation = NewsletterSchema.safeParse({ email });

  if (!validation.success) {
    return {
      success: false,
      message: "Please enter a valid email address",
      errors: { email: validation.error.issues[0]?.message ?? "Invalid email" },
    };
  }

  const data = validation.data;

  // Send notification to sales team
  const apiKey = process.env.RESEND_API_KEY;
  const recipient =
    process.env.CONTACT_RECIPIENT_EMAIL ?? "wangxujun0516@gmail.com";

  if (apiKey) {
    try {
      const { Resend } = await import("resend");
      const resend = new Resend(apiKey);
      await resend.emails.send({
        from: "Henghong Website <onboarding@resend.dev>",
        to: recipient,
        replyTo: data.email,
        subject: `New Blog Newsletter Subscriber: ${data.email}`,
        html: `<p><strong>New subscriber:</strong> ${data.email}</p><p><strong>Date:</strong> ${new Date().toISOString()}</p>`,
      });
    } catch (err) {
      console.error("Newsletter notification failed:", err);
    }
  }

  return {
    success: true,
    message: "Thank you for subscribing! We'll send you industry insights and product updates.",
  };
}
