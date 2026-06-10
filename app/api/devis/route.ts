import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { COMPANY } from "@/lib/data";

const schema = z.object({
  workTypes: z.array(z.string()).min(1),
  description: z.string().min(10),
  isUrgent: z.boolean().optional(),
  preferredDate: z.string().optional(),
  name: z.string().min(2),
  phone: z.string().min(8),
  email: z.string().email(),
  address: z.string().min(5),
  rgpd: z.literal(true),
  otherDetails: z.string().optional(),
});

function buildEmailHtml(data: z.infer<typeof schema>): string {
  const urgenceTag = data.isUrgent ? '<span style="color:#DC2626;font-weight:bold">🚨 URGENT</span>' : "";
  return `
    <!DOCTYPE html>
    <html lang="fr">
    <head><meta charset="UTF-8"><title>Nouvelle demande de devis</title></head>
    <body style="font-family:Arial,sans-serif;background:#F5F7FA;margin:0;padding:20px;">
      <div style="max-width:600px;margin:0 auto;background:white;border-radius:12px;overflow:hidden;box-shadow:0 4px 20px rgba(0,0,0,0.08);">
        <div style="background:#0056B3;padding:24px;text-align:center;">
          <h1 style="color:white;margin:0;font-size:22px;">Nouvelle demande de devis ${urgenceTag}</h1>
          <p style="color:rgba(255,255,255,0.8);margin:8px 0 0;">Irshad Services — ${new Date().toLocaleDateString("fr-FR", { weekday: "long", year: "numeric", month: "long", day: "numeric", hour: "2-digit", minute: "2-digit" })}</p>
        </div>
        <div style="padding:24px;">
          <table style="width:100%;border-collapse:collapse;">
            <tr style="border-bottom:1px solid #E4E7EC;">
              <td style="padding:12px 0;color:#667085;font-size:14px;width:40%;">Nom</td>
              <td style="padding:12px 0;font-weight:600;font-size:14px;">${data.name}</td>
            </tr>
            <tr style="border-bottom:1px solid #E4E7EC;">
              <td style="padding:12px 0;color:#667085;font-size:14px;">Téléphone</td>
              <td style="padding:12px 0;font-weight:600;font-size:14px;"><a href="tel:${data.phone}" style="color:#0056B3;">${data.phone}</a></td>
            </tr>
            <tr style="border-bottom:1px solid #E4E7EC;">
              <td style="padding:12px 0;color:#667085;font-size:14px;">Email</td>
              <td style="padding:12px 0;font-size:14px;"><a href="mailto:${data.email}" style="color:#0056B3;">${data.email}</a></td>
            </tr>
            <tr style="border-bottom:1px solid #E4E7EC;">
              <td style="padding:12px 0;color:#667085;font-size:14px;">Adresse</td>
              <td style="padding:12px 0;font-size:14px;">${data.address}</td>
            </tr>
            <tr style="border-bottom:1px solid #E4E7EC;">
              <td style="padding:12px 0;color:#667085;font-size:14px;">Types de travaux</td>
              <td style="padding:12px 0;font-size:14px;">${data.workTypes.join(", ")}</td>
            </tr>
            <tr style="border-bottom:1px solid #E4E7EC;">
              <td style="padding:12px 0;color:#667085;font-size:14px;">Urgence</td>
              <td style="padding:12px 0;font-size:14px;">${data.isUrgent ? "✅ Oui" : "Non"}</td>
            </tr>
            ${data.preferredDate ? `
            <tr style="border-bottom:1px solid #E4E7EC;">
              <td style="padding:12px 0;color:#667085;font-size:14px;">Date souhaitée</td>
              <td style="padding:12px 0;font-size:14px;">${data.preferredDate}</td>
            </tr>` : ""}
          </table>
          <div style="margin-top:20px;padding:16px;background:#F5F7FA;border-radius:8px;border-left:4px solid #0056B3;">
            <p style="margin:0 0 8px;color:#667085;font-size:13px;font-weight:600;text-transform:uppercase;letter-spacing:0.05em;">Description du projet</p>
            <p style="margin:0;font-size:14px;line-height:1.6;">${data.description}</p>
          </div>
        </div>
        <div style="padding:16px 24px;background:#0056B3;text-align:center;">
          <p style="color:rgba(255,255,255,0.7);font-size:12px;margin:0;">Irshad Services — ${COMPANY.address}, ${COMPANY.postalCode} ${COMPANY.city} — ${COMPANY.phone}</p>
        </div>
      </div>
    </body>
    </html>
  `;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const data = schema.parse(body);

    const resendApiKey = process.env.RESEND_API_KEY;

    if (resendApiKey && resendApiKey !== "re_placeholder") {
      const { Resend } = await import("resend");
      const resend = new Resend(resendApiKey);

      await resend.emails.send({
        from: "noreply@irshadservices.fr",
        to: [COMPANY.email],
        replyTo: data.email,
        subject: `[Devis] ${data.workTypes.join(", ")} — ${data.name} ${data.isUrgent ? "🚨 URGENT" : ""}`,
        html: buildEmailHtml(data),
      });
    } else {
      console.log("[Devis simulation] No RESEND_API_KEY set. Email content:", {
        to: COMPANY.email,
        from: data.name,
        workTypes: data.workTypes,
        isUrgent: data.isUrgent,
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: "Données invalides", details: error.issues }, { status: 400 });
    }
    console.error("[API /devis] Error:", error);
    return NextResponse.json({ error: "Erreur interne" }, { status: 500 });
  }
}
