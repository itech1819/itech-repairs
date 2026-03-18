import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY)
  const NOTIFY_EMAIL = process.env.NOTIFY_EMAIL ?? 'repairs@itechrepairs.com.au'
  const FROM_EMAIL = process.env.FROM_EMAIL ?? 'quotes@itechrepairs.com.au'

  try {
    const body = await req.json()
    const { name, phone, device, condition } = body as Record<string, string>

    if (!name || !phone || !device || !condition) {
      return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 })
    }

    const html = `
      <div style="font-family:sans-serif;max-width:580px;margin:0 auto;color:#111">
        <h2 style="background:#e63946;color:#fff;padding:16px 20px;border-radius:8px 8px 0 0;margin:0">
          New Sell My Device Lead — iTech Repairs
        </h2>
        <div style="border:1px solid #e5e7eb;border-top:none;border-radius:0 0 8px 8px;padding:24px">
          <table style="width:100%;border-collapse:collapse;font-size:14px">
            <tr><td style="padding:8px 0;color:#6b7280;width:120px">Name</td><td style="padding:8px 0;font-weight:600">${name}</td></tr>
            <tr><td style="padding:8px 0;color:#6b7280">Phone</td><td style="padding:8px 0;font-weight:600"><a href="tel:${phone.replace(/\s/g, '')}" style="color:#e63946">${phone}</a></td></tr>
            <tr><td style="padding:8px 0;color:#6b7280">Device</td><td style="padding:8px 0">${device}</td></tr>
            <tr><td style="padding:8px 0;color:#6b7280">Condition</td><td style="padding:8px 0">${condition}</td></tr>
          </table>
          <hr style="border:none;border-top:1px solid #e5e7eb;margin:20px 0">
          <p style="font-size:12px;color:#9ca3af;margin:0">Submitted via itechrepairs.com.au — Sell My Device lead form</p>
        </div>
      </div>
    `

    await resend.emails.send({
      from: `iTech Repairs <${FROM_EMAIL}>`,
      to: NOTIFY_EMAIL,
      subject: `New Sell Enquiry — ${device} (${condition}) from ${name}`,
      html,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Sell quote error:', err)
    return NextResponse.json({ error: 'Failed to send. Please call us directly.' }, { status: 500 })
  }
}
