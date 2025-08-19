import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

export const ContactFormEmail = async (to, data) => {
  // Create transporter
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
    secure: true, // true for 465, false for other ports
  });

  // Send mail
  await transporter.sendMail({
    from: `"<no-reply@cryptionverse.systems>"`,
    to: to,
    subject: `New Project Inquiry from ${data.fullName}`,
    html: `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <title>New Client Inquiry</title>
      <style>
        body {
          font-family: 'Arial', sans-serif;
          background-color: #f5f5f5;
          color: #333;
          margin: 0;
          padding: 0;
        }
        .container {
          width: 100%;
          max-width: 700px;
          margin: 0 auto;
          background-color: #ffffff;
          padding: 30px;
          border-radius: 10px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }
        h2 {
          color: #0a66c2;
          font-size: 24px;
          text-align: center;
        }
        p {
          font-size: 16px;
          line-height: 1.6;
          margin-bottom: 12px;
        }
        .info-label {
          font-weight: bold;
          color: #555;
        }
        .info-value {
          color: #333;
        }
        .project-details {
          background-color: #f9fafb;
          padding: 15px;
          border-radius: 6px;
          margin-top: 10px;
          border: 1px solid #ddd;
        }
        .footer {
          margin-top: 40px;
          font-size: 12px;
          color: #888;
          text-align: center;
        }
        .footer a {
          color: #0a66c2;
          text-decoration: none;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h2>New Project Inquiry </h2>
        
        <p><span class="info-label">Full Name:</span> <span class="info-value">${
          data.fullName
        }</span></p>
        <p><span class="info-label">Email Address:</span> <span class="info-value">${
          data.email
        }</span></p>
        ${
          data.company
            ? `<p><span class="info-label">Company Name:</span> <span class="info-value">${data.company}</span></p>`
            : ""
        }

        <p><span class="info-label">Project Details:</span></p>
        <div class="project-details">
          <p>${data.message}</p>
        </div>

        <p>If you have any follow-up questions, feel free to get in touch with us directly.</p>

        
      </div>
    </body>
    </html>
    `,
  });
};
