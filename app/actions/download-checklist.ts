"use server";

import { Resend } from "resend";
import { z } from "zod";

const DownloadFormSchema = z.object({
  company: z.string().min(2, "Company name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
});

export type DownloadFormState = {
  success: boolean;
  message: string;
  errors?: Record<string, string>;
};

export async function submitDownloadForm(
  prevState: DownloadFormState | null,
  formData: FormData,
): Promise<DownloadFormState> {
  const rawData = {
    company: formData.get("company")?.toString() ?? "",
    email: formData.get("email")?.toString() ?? "",
  };

  const validation = DownloadFormSchema.safeParse(rawData);

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

  // Send notification email to sales team
  const apiKey = process.env.RESEND_API_KEY;
  const recipient =
    process.env.CONTACT_RECIPIENT_EMAIL ?? "wangxujun0516@gmail.com";

  if (apiKey) {
    try {
      const resend = new Resend(apiKey);
      await resend.emails.send({
        from: "Henghong Website <onboarding@resend.dev>",
        to: recipient,
        replyTo: data.email,
        subject: `New OEM Checklist Download: ${data.company}`,
        html: `
          <h2>New Checklist Download</h2>
          <p><strong>Company:</strong> ${data.company}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Time:</strong> ${new Date().toISOString()}</p>
        `,
      });
    } catch (err) {
      console.error("Failed to send notification:", err);
      // Don't block the download if notification fails
    }
  }

  return {
    success: true,
    message: `/documents/oem-sourcing-checklist.html`,
  };
}
