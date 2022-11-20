const nodeMailer = require('nodemailer');

const sendEmail = async (options) => {
  const trasnsporter = nodeMailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_MAIL,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.SMTP_MAIL,
    to: options.email,
    subject: options.subject,
    text: options.message,
  };

  // mail sent
  await trasnsporter.sendMail(mailOptions);
};

module.exports = sendEmail;
