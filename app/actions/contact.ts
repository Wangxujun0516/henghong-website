"use server";

import { Resend } from "resend";
import { z } from "zod";

const ContactFormSchema = z.object({
  company: z.string().min(2, "Company name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  country: z.string().min(1, "Please select your country/region"),
  product: z.string().min(1, "Please select a product category"),
  quantity: z.string().min(1, "Please select estimated annual quantity"),
  message: z.string().optional(),
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
    company: formData.get("company")?.toString() ?? "",
    email: formData.get("email")?.toString() ?? "",
    country: formData.get("country")?.toString() ?? "",
    product: formData.get("product")?.toString() ?? "",
    quantity: formData.get("quantity")?.toString() ?? "",
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

  const countryLabels: Record<string, string> = {
    "usa": "United States",
    "canada": "Canada",
    "uk": "United Kingdom",
    "germany": "Germany",
    "france": "France",
    "italy": "Italy",
    "spain": "Spain",
    "netherlands": "Netherlands",
    "australia": "Australia",
    "newzealand": "New Zealand",
    "japan": "Japan",
    "southkorea": "South Korea",
    "other": "Other",
  };

  const productLabels: Record<string, string> = {
    "6t-system": "6T Leveling System (HCPTR-3)",
    "12t-system": "12T Leveling System (DC12V 4-Leg)",
    "jacks": "Electric Trailer Jacks (HH-2000/HH-3500/HH-7500)",
    "stabilizers": "Stabilizer Jacks (HH-400/HCPSR Series)",
    "oem-odm": "OEM/ODM Custom Project",
  };

  const quantityLabels: Record<string, string> = {
    "less-100": "< 100 pcs / year",
    "100-500": "100 - 500 pcs / year",
    "500-2000": "500 - 2000 pcs / year",
    "2000-plus": "2000+ pcs / year",
  };

  const countryDisplay = countryLabels[data.country] || data.country;
  const productDisplay = productLabels[data.product] || data.product;
  const quantityDisplay = quantityLabels[data.quantity] || data.quantity;

  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background: #0a2540; color: white; padding: 20px; text-align: center;">
        <h1 style="margin: 0;">New OEM Quote Request</h1>
      </div>
      <div style="background: #f7fafc; padding: 20px;">
        <h2 style="color: #0a2540; margin-top: 0;">Company Information</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #0a2540; width: 40%;">Company:</td>
            <td style="padding: 8px 0; color: #2d3748;">${data.company}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #0a2540;">Email:</td>
            <td style="padding: 8px 0; color: #2d3748;"><a href="mailto:${data.email}">${data.email}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #0a2540;">Country/Region:</td>
            <td style="padding: 8px 0; color: #2d3748;">${countryDisplay}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #0a2540;">Product Interest:</td>
            <td style="padding: 8px 0; color: #2d3748;">${productDisplay}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #0a2540;">Annual Quantity:</td>
            <td style="padding: 8px 0; color: #2d3748;">${quantityDisplay}</td>
          </tr>
        </table>
        ${data.message ? `
        <h2 style="color: #0a2540; margin-top: 20px;">Technical Requirements</h2>
        <div style="background: white; padding: 15px; border-left: 4px solid #ff6b35; white-space: pre-wrap;">${data.message}</div>
        ` : ""}
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
      subject: `OEM Quote Request from ${data.company}`,
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
      message: "Thank you! Your OEM quote request has been sent successfully. Our sales team will contact you within 24 hours.",
    };
  } catch (err) {
    console.error("Unexpected error:", err);
    return {
      success: false,
      message: "An unexpected error occurred. Please try again later.",
    };
  }
}