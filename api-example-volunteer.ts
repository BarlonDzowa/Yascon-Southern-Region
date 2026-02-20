// app/api/volunteer/route.ts
// Example API route for handling volunteer form submissions

import { NextResponse } from 'next/server';

// You can integrate with email services like SendGrid, Resend, or Nodemailer
// Example using a simple email notification

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // Validate the data
    const { name, email, phone, country, education, experience, motivation } = data;
    
    if (!name || !email || !phone || !country || !education || !motivation) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Here you would typically:
    // 1. Save to database
    // 2. Send email notification to YASCON team
    // 3. Send confirmation email to applicant
    
    // Example: Send email using Resend
    /*
    const { Resend } = require('resend');
    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: 'YASCON <noreply@yascon.org>',
      to: ['yasconmw@outlook.com'],
      subject: 'New Volunteer Application',
      html: `
        <h2>New Volunteer Application</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Country:</strong> ${country}</p>
        <p><strong>Education:</strong> ${education}</p>
        <p><strong>Experience:</strong> ${experience}</p>
        <p><strong>Motivation:</strong> ${motivation}</p>
      `
    });

    // Send confirmation to applicant
    await resend.emails.send({
      from: 'YASCON <noreply@yascon.org>',
      to: [email],
      subject: 'Thank you for applying to YASCON',
      html: `
        <h2>Thank you for your application!</h2>
        <p>Dear ${name},</p>
        <p>We have received your volunteer application and will review it shortly.</p>
        <p>Our team will contact you within 5 business days.</p>
        <p>Best regards,<br>The YASCON Team</p>
      `
    });
    */

    // Example: Save to database
    /*
    const { PrismaClient } = require('@prisma/client');
    const prisma = new PrismaClient();
    
    await prisma.volunteerApplication.create({
      data: {
        name,
        email,
        phone,
        country,
        education,
        experience,
        motivation,
        status: 'pending',
        appliedAt: new Date()
      }
    });
    */

    // For now, just return success
    console.log('Volunteer application received:', data);

    return NextResponse.json({
      success: true,
      message: 'Application submitted successfully'
    });

  } catch (error) {
    console.error('Error processing volunteer application:', error);
    return NextResponse.json(
      { error: 'Failed to process application' },
      { status: 500 }
    );
  }
}

// Example database schema (using Prisma)
/*
model VolunteerApplication {
  id          String   @id @default(cuid())
  name        String
  email       String
  phone       String
  country     String
  education   String
  experience  String?
  motivation  String
  status      String   @default("pending") // pending, reviewed, accepted, rejected
  appliedAt   DateTime @default(now())
  reviewedAt  DateTime?
  notes       String?
}
*/
