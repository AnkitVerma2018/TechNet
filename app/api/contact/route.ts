import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export const runtime = 'nodejs'

type ContactRequest = {
  name?: string
  email?: string
  phone?: string
  company?: string
  projectType?: string
  message?: string

  // Hidden honeypot field
  website?: string
}

function cleanValue(value: unknown, maxLength = 1000) {
  if (typeof value !== 'string') {
    return ''
  }

  return value.trim().slice(0, maxLength)
}

function escapeHtml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;')
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactRequest

    const name = cleanValue(body.name, 100)
    const email = cleanValue(body.email, 150).toLowerCase()
    const phone = cleanValue(body.phone, 30)
    const company = cleanValue(body.company, 150)
    const projectType = cleanValue(body.projectType, 100)
    const message = cleanValue(body.message, 4000)
    const website = cleanValue(body.website, 200)

    /*
     * Honeypot spam protection:
     * Normal users cannot see this field.
     */
    if (website) {
      return NextResponse.json({
        success: true,
        message: 'Your enquiry has been submitted successfully.',
      })
    }

    if (!name || !email || !projectType || !message) {
      return NextResponse.json(
        {
          success: false,
          message:
            'Name, email, project type and project requirements are required.',
        },
        { status: 400 },
      )
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        {
          success: false,
          message: 'Please enter a valid email address.',
        },
        { status: 400 },
      )
    }

    const smtpUser = process.env.SMTP_USER
    const smtpPassword = process.env.SMTP_PASS

    if (!smtpUser || !smtpPassword) {
      console.error('SMTP configuration is missing.')

      return NextResponse.json(
        {
          success: false,
          message:
            'Email service is not configured. Please contact us by phone or WhatsApp.',
        },
        { status: 500 },
      )
    }

    const smtpPort = Number(process.env.SMTP_PORT || 465)
    const smtpSecure =
      String(process.env.SMTP_SECURE || 'true').toLowerCase() === 'true'

    const receiverEmail =
      process.env.CONTACT_RECEIVER_EMAIL || smtpUser

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: smtpPort,
      secure: smtpSecure,
      auth: {
        user: smtpUser,
        pass: smtpPassword,
      },
    })

    const safeName = escapeHtml(name)
    const safeEmail = escapeHtml(email)
    const safePhone = escapeHtml(phone || 'Not provided')
    const safeCompany = escapeHtml(company || 'Not provided')
    const safeProjectType = escapeHtml(projectType)
    const safeMessage = escapeHtml(message).replaceAll('\n', '<br />')

    const receivedAt = new Intl.DateTimeFormat('en-IN', {
      dateStyle: 'medium',
      timeStyle: 'short',
      timeZone: 'Asia/Kolkata',
    }).format(new Date())

    /*
     * Email 1: Sent to TechNet Solution
     */
    const adminEmail = transporter.sendMail({
      from: `"TechNet Website" <${smtpUser}>`,
      to: receiverEmail,

      /*
       * Clicking Reply will reply directly to the customer.
       */
      replyTo: `"${name}" <${email}>`,

      subject: `New ${projectType} Enquiry from ${name}`,

      text: `
New website enquiry

Name: ${name}
Email: ${email}
Phone: ${phone || 'Not provided'}
Company: ${company || 'Not provided'}
Project Type: ${projectType}
Received On: ${receivedAt}

Project Requirements:
${message}
      `.trim(),

      html: `
        <!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="UTF-8" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1.0"
            />
          </head>

          <body
            style="
              margin: 0;
              padding: 24px;
              background-color: #f3f9fd;
              font-family: Arial, Helvetica, sans-serif;
              color: #163d5d;
            "
          >
            <div
              style="
                max-width: 680px;
                margin: 0 auto;
                background-color: #ffffff;
                border: 1px solid #d5e7f2;
                border-radius: 18px;
                overflow: hidden;
              "
            >
              <div
                style="
                  padding: 28px;
                  background: linear-gradient(
                    135deg,
                    #062f54,
                    #0b568c,
                    #176ca3
                  );
                  color: #ffffff;
                "
              >
                <p
                  style="
                    margin: 0 0 8px;
                    color: #91dcff;
                    font-size: 12px;
                    font-weight: 700;
                    letter-spacing: 2px;
                    text-transform: uppercase;
                  "
                >
                  TechNet Solution
                </p>

                <h1
                  style="
                    margin: 0;
                    font-size: 26px;
                    line-height: 1.3;
                  "
                >
                  New Website Enquiry
                </h1>

                <p
                  style="
                    margin: 10px 0 0;
                    color: rgba(255, 255, 255, 0.78);
                    font-size: 14px;
                  "
                >
                  A new project enquiry has been submitted through your
                  website.
                </p>
              </div>

              <div style="padding: 28px">
                <table
                  cellpadding="0"
                  cellspacing="0"
                  style="
                    width: 100%;
                    border-collapse: collapse;
                    font-size: 14px;
                  "
                >
                  <tr>
                    <td
                      style="
                        width: 150px;
                        padding: 12px;
                        background: #f3f9fd;
                        border: 1px solid #dceaf3;
                        font-weight: 700;
                        color: #062f54;
                      "
                    >
                      Name
                    </td>

                    <td
                      style="
                        padding: 12px;
                        border: 1px solid #dceaf3;
                      "
                    >
                      ${safeName}
                    </td>
                  </tr>

                  <tr>
                    <td
                      style="
                        padding: 12px;
                        background: #f3f9fd;
                        border: 1px solid #dceaf3;
                        font-weight: 700;
                        color: #062f54;
                      "
                    >
                      Email
                    </td>

                    <td
                      style="
                        padding: 12px;
                        border: 1px solid #dceaf3;
                      "
                    >
                      <a
                        href="mailto:${safeEmail}"
                        style="color: #0b568c"
                      >
                        ${safeEmail}
                      </a>
                    </td>
                  </tr>

                  <tr>
                    <td
                      style="
                        padding: 12px;
                        background: #f3f9fd;
                        border: 1px solid #dceaf3;
                        font-weight: 700;
                        color: #062f54;
                      "
                    >
                      Phone
                    </td>

                    <td
                      style="
                        padding: 12px;
                        border: 1px solid #dceaf3;
                      "
                    >
                      ${safePhone}
                    </td>
                  </tr>

                  <tr>
                    <td
                      style="
                        padding: 12px;
                        background: #f3f9fd;
                        border: 1px solid #dceaf3;
                        font-weight: 700;
                        color: #062f54;
                      "
                    >
                      Company
                    </td>

                    <td
                      style="
                        padding: 12px;
                        border: 1px solid #dceaf3;
                      "
                    >
                      ${safeCompany}
                    </td>
                  </tr>

                  <tr>
                    <td
                      style="
                        padding: 12px;
                        background: #f3f9fd;
                        border: 1px solid #dceaf3;
                        font-weight: 700;
                        color: #062f54;
                      "
                    >
                      Project Type
                    </td>

                    <td
                      style="
                        padding: 12px;
                        border: 1px solid #dceaf3;
                      "
                    >
                      ${safeProjectType}
                    </td>
                  </tr>

                  <tr>
                    <td
                      style="
                        padding: 12px;
                        background: #f3f9fd;
                        border: 1px solid #dceaf3;
                        font-weight: 700;
                        color: #062f54;
                      "
                    >
                      Received On
                    </td>

                    <td
                      style="
                        padding: 12px;
                        border: 1px solid #dceaf3;
                      "
                    >
                      ${receivedAt}
                    </td>
                  </tr>
                </table>

                <div
                  style="
                    margin-top: 22px;
                    padding: 18px;
                    background-color: #f7fbfe;
                    border: 1px solid #dceaf3;
                    border-radius: 12px;
                  "
                >
                  <p
                    style="
                      margin: 0 0 10px;
                      color: #062f54;
                      font-size: 14px;
                      font-weight: 700;
                    "
                  >
                    Project Requirements
                  </p>

                  <p
                    style="
                      margin: 0;
                      color: #49677f;
                      font-size: 14px;
                      line-height: 1.7;
                    "
                  >
                    ${safeMessage}
                  </p>
                </div>

                <div style="margin-top: 22px">
                  <a
                    href="mailto:${safeEmail}"
                    style="
                      display: inline-block;
                      padding: 13px 22px;
                      background-color: #0b568c;
                      color: #ffffff;
                      text-decoration: none;
                      border-radius: 9px;
                      font-size: 14px;
                      font-weight: 700;
                    "
                  >
                    Reply to Customer
                  </a>
                </div>
              </div>
            </div>
          </body>
        </html>
      `,
    })

    /*
     * Email 2: Confirmation sent to the customer
     */
    const customerEmail = transporter.sendMail({
      from: `"TechNet Solution" <${smtpUser}>`,
      to: email,
      replyTo: receiverEmail,
      subject: 'We received your enquiry | TechNet Solution',

      text: `
Hello ${name},

Thank you for contacting TechNet Solution.

We have successfully received your enquiry regarding:
${projectType}

Our team will review your requirements and contact you shortly.

Your submitted message:
${message}

Regards,
TechNet Solution
Your Vision, Our Code
Phone: +91 90846 11723
Email: technetsolutiontke19@gmail.com
      `.trim(),

      html: `
        <!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="UTF-8" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1.0"
            />
          </head>

          <body
            style="
              margin: 0;
              padding: 24px;
              background-color: #f3f9fd;
              font-family: Arial, Helvetica, sans-serif;
              color: #163d5d;
            "
          >
            <div
              style="
                max-width: 650px;
                margin: 0 auto;
                background-color: #ffffff;
                border: 1px solid #d5e7f2;
                border-radius: 18px;
                overflow: hidden;
              "
            >
              <div
                style="
                  padding: 30px;
                  text-align: center;
                  background: linear-gradient(
                    135deg,
                    #062f54,
                    #0b568c,
                    #176ca3
                  );
                  color: #ffffff;
                "
              >
                <p
                  style="
                    margin: 0 0 10px;
                    color: #91dcff;
                    font-size: 13px;
                    font-weight: 700;
                    letter-spacing: 2px;
                    text-transform: uppercase;
                  "
                >
                  TechNet Solution
                </p>

                <h1
                  style="
                    margin: 0;
                    font-size: 27px;
                    line-height: 1.3;
                  "
                >
                  Thank You for Contacting Us
                </h1>

                <p
                  style="
                    margin: 12px 0 0;
                    color: rgba(255, 255, 255, 0.8);
                    font-size: 15px;
                  "
                >
                  Your Vision, Our Code
                </p>
              </div>

              <div style="padding: 30px">
                <p
                  style="
                    margin: 0 0 16px;
                    color: #062f54;
                    font-size: 18px;
                    font-weight: 700;
                  "
                >
                  Hello ${safeName},
                </p>

                <p
                  style="
                    margin: 0;
                    color: #49677f;
                    font-size: 15px;
                    line-height: 1.8;
                  "
                >
                  We have successfully received your enquiry. Our team will
                  review your requirements and contact you as soon as
                  possible.
                </p>

                <div
                  style="
                    margin-top: 24px;
                    padding: 18px;
                    background-color: #f3f9fd;
                    border-left: 4px solid #2c83b7;
                    border-radius: 10px;
                  "
                >
                  <p
                    style="
                      margin: 0 0 7px;
                      color: #062f54;
                      font-size: 13px;
                      font-weight: 700;
                      text-transform: uppercase;
                      letter-spacing: 1px;
                    "
                  >
                    Project Type
                  </p>

                  <p
                    style="
                      margin: 0;
                      color: #0b568c;
                      font-size: 16px;
                      font-weight: 700;
                    "
                  >
                    ${safeProjectType}
                  </p>
                </div>

                <div
                  style="
                    margin-top: 18px;
                    padding: 18px;
                    background-color: #f7fbfe;
                    border: 1px solid #dceaf3;
                    border-radius: 10px;
                  "
                >
                  <p
                    style="
                      margin: 0 0 10px;
                      color: #062f54;
                      font-size: 13px;
                      font-weight: 700;
                    "
                  >
                    Your Submitted Message
                  </p>

                  <p
                    style="
                      margin: 0;
                      color: #647f93;
                      font-size: 14px;
                      line-height: 1.7;
                    "
                  >
                    ${safeMessage}
                  </p>
                </div>

                <p
                  style="
                    margin: 24px 0 0;
                    color: #49677f;
                    font-size: 14px;
                    line-height: 1.7;
                  "
                >
                  For urgent assistance, you can call or WhatsApp us at
                  <strong style="color: #062f54">
                    +91 90846 11723
                  </strong>.
                </p>

                <div
                  style="
                    margin-top: 25px;
                    padding-top: 20px;
                    border-top: 1px solid #dceaf3;
                  "
                >
                  <p
                    style="
                      margin: 0;
                      color: #062f54;
                      font-size: 14px;
                      font-weight: 700;
                    "
                  >
                    Regards,
                  </p>

                  <p
                    style="
                      margin: 6px 0 0;
                      color: #0b568c;
                      font-size: 16px;
                      font-weight: 700;
                    "
                  >
                    TechNet Solution
                  </p>

                  <p
                    style="
                      margin: 4px 0 0;
                      color: #7890a3;
                      font-size: 13px;
                    "
                  >
                    Your Vision, Our Code
                  </p>
                </div>
              </div>
            </div>
          </body>
        </html>
      `,
    })

    await Promise.all([adminEmail, customerEmail])

    return NextResponse.json({
      success: true,
      message:
        'Your enquiry has been submitted successfully. A confirmation email has also been sent to you.',
    })
  } catch (error) {
    console.error('Contact form email error:', error)

    return NextResponse.json(
      {
        success: false,
        message:
          'We could not submit your enquiry. Please try again or contact us on WhatsApp.',
      },
      { status: 500 },
    )
  }
}