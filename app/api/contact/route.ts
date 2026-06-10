import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { COMPANY } from "@/lib/data";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  subject: z.string().min(2),
  message: z.string().min(10),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const data = schema.parse(body);

    const resendApiKey = process.env.RESEND_API_KEY;

    const html = `
      <!DOCTYPE html>
      <html lang="fr"><body style="font-family:Arial,sans-serif;background:#F5F7FA;padding:20px;">
        <div style="max-width:560px;margin:0 auto;background:white;border-radius:12px;overflow:hidden;">
          <div style="background:#0056B3;padding:20px;text-align:center;">
            <h2 style="color:white;margin:0;">Nouveau message de contact</h2>
          </div>
          <div style="padding:24px;">
            <p><strong>Nom :</strong> ${data.name}</p>
            <p><strong>Email :</strong> <a href="mailto:${data.email}">${data.email}</a></p>
            ${data.phone ? `<p><strong>Tél :</strong> <a href="tel:${data.phone}">${data.phone}</a></p>` : ""}
            <p><strong>Sujet :</strong> ${data.subject}</p>
            <div style="background:#F5F7FA;padding:16px;border-radius:8px;margin-top:12px;border-left:4px solid #0056B3;">
              <p style="margin:0;white-space:pre-line;">${data.message}</p>
            </div>
          </div>
        </div>
      </body></html>
    `;

    if (resendApiKey && resendApiKey !== "re_placeholder") {
      const { Resend } = await import("resend");
      const resend = new Resend(resendApiKey);
      await resend.emails.send({
        from: "noreply@irshadservices.fr",
        to: [COMPANY.email],
        replyTo: data.email,
        subject: `[Contact] ${data.subject} — ${data.name}`,
        html,
      });
    } else {
      console.log("[Contact simulation]", { to: COMPANY.email, name: data.name, subject: data.subject });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: "Données invalides" }, { status: 400 });
    }
    return NextResponse.json({ error: "Erreur interne" }, { status: 500 });
  }
}
