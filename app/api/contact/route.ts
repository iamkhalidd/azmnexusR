import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { fullName, company, inquiryType, message } = body

    if (!fullName || !company || !inquiryType || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    const { error } = await resend.emails.send({
      from: 'AZM Nexus Website <onboarding@resend.dev>',
      to: ['contact@azmnexus.com'],
      subject: `New Inquiry: ${inquiryType} from ${fullName}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1D4A52;">New Business Inquiry — AZM Nexus</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #E0EEEE; color: #4A6670; width: 140px;">Full Name</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #E0EEEE; color: #0D1F22;">${fullName}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #E0EEEE; color: #4A6670;">Company</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #E0EEEE; color: #0D1F22;">${company}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #E0EEEE; color: #4A6670;">Inquiry Type</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #E0EEEE; color: #0D1F22;">${inquiryType}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; color: #4A6670; vertical-align: top;">Message</td>
              <td style="padding: 12px 0; color: #0D1F22;">${message}</td>
            </tr>
          </table>
          <p style="margin-top: 32px; color: #4A6670; font-size: 13px;">
            This inquiry was submitted via the AZM Nexus website contact form.
          </p>
        </div>
      `
    })

    if (error) {
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { success: true },
      { status: 200 }
    )

  } catch {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
