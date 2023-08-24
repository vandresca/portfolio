const nodemailer = require('nodemailer');

var transport = nodemailer.createTransport({
  host: "live.smtp.mailtrap.io",
  port: 587,
  auth: {
    user: "api",
    pass: "e7bf5af58bf54ca93e3adf52fc4d097f"
  }
});

const mail = {
  from: {
    name: 'Your Name',
    email: 'victorac1981@gmail.com',
  },
  to: 'vandresca@outlook.es',
  subject: 'Test Email',
  text: 'This is a test email.',
};

transport.sendMail(mail, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Correo enviado con éxito');
  }
});
