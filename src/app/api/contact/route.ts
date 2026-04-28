import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create a transporter using Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER || 'anubhuti.matchbestsoftware@gmail.com',
        pass: process.env.GMAIL_APP_PASSWORD || '',
      },
    });

    // Email content
    const mailOptions = {
      from: '"VRAM Estates Contact Form" <anubhuti.matchbestsoftware@gmail.com>',
      to: 'anubhuti.matchbestsoftware@gmail.com',
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
          <div style="background-color: white; padding: 30px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <h2 style="color: #18120f; border-bottom: 3px solid #d4a269; padding-bottom: 15px; margin-top: 0;">
              New Contact Form Submission
            </h2>
            
            <div style="margin: 25px 0;">
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e0e0e0;">
                    <strong style="color: #18120f;">Name:</strong>
                  </td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e0e0e0; color: #555;">
                    ${name}
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e0e0e0;">
                    <strong style="color: #18120f;">Email:</strong>
                  </td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e0e0e0;">
                    <a href="mailto:${email}" style="color: #d4a269; text-decoration: none;">${email}</a>
                  </td>
                </tr>
                ${phone ? `
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e0e0e0;">
                    <strong style="color: #18120f;">Phone:</strong>
                  </td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e0e0e0; color: #555;">
                    ${phone}
                  </td>
                </tr>
                ` : ''}
              </table>
            </div>
            
            <div style="margin: 25px 0;">
              <p style="margin: 0 0 10px 0; color: #18120f;"><strong>Message:</strong></p>
              <div style="background-color: #f7f1e8; padding: 20px; border-left: 4px solid #d4a269; border-radius: 4px; color: #333; line-height: 1.6;">
                ${message.replace(/\n/g, '<br>')}
              </div>
            </div>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 2px solid #e0e0e0; color: #888; font-size: 13px;">
              <p style="margin: 5px 0;">This email was sent from the VRAM Estates contact form.</p>
              <p style="margin: 5px 0;">Reply directly to this email to respond to ${name}.</p>
              <p style="margin: 5px 0; color: #d4a269;">
                <strong>VRAM Estates</strong> - Luxury Property Consultants
              </p>
            </div>
          </div>
        </div>
      `,
      text: `
New Contact Form Submission

Name: ${name}
Email: ${email}
${phone ? `Phone: ${phone}` : ''}

Message:
${message}

---
This email was sent from the VRAM Estates contact form.
Reply directly to this email to respond to ${name}.
      `,
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);

    console.log('Email sent successfully:', info.messageId);

    return NextResponse.json(
      { 
        message: 'Email sent successfully',
        messageId: info.messageId
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { 
        error: 'Failed to send email',
        details: error.message 
      },
      { status: 500 }
    );
  }
}
