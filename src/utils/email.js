import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

export async function sendEmail(options){
  // 1) Create a transporter
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: '465',
    // secure: false,
    auth: {
      user: process.env.EMAIL_USER || 'healthsymptochat.info@gmail.com',
      pass: process.env.PASSWORD || 'nmmx jdzr jwtd inuv',
    },

  });
  const mailOptions = {
    from: 'HealthSymptoChat <healthsymptochat.info@gmail.com>',
    to: options.email,
    subject: options.subject,
    text: options.message,
    html: options.html,
  };

  await transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.error(err);
    } else {
      console.log(info);
    }
  });
};