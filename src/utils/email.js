import nodemailer from 'nodemailer';

export async function sendEmail(options){
  // 1) Create a transporter
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: '465',
    // secure: false,
    auth: {
      user: 'Innovatexplorer24@gmail.com',
      pass: 'Innovatexplorer2024',
    },

  });
  const mailOptions = {
    from: 'HealthSymptoChat <Innovatexplorer24@gmail.com>',
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