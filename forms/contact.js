const express = require('express');
const bodyParser = require('body-parser');
const smtp = require('nodemailer');

const app = express();
app.use(bodyParser.json());

// Replace contact@example.com with your real receiving email address
const receivingEmailAddress = 'victorac1981@gmail.com';

// Create a new SMTP client
const transporter = smtp.createTransport({
  host: 'smtp.example.com',
  port: 587,
  auth: {
    user: 'example',
    password: 'pass',
  },
});

app.post('/contact', (req, res) => {
  // Get the form data
  const name = req.body.name;
  const email = req.body.email;
  const subject = req.body.subject;
  const message = req.body.message;

  // Create a new email message
  const mail = {
    from: {
      name: name,
      email: email,
    },
    to: receivingEmailAddress,
    subject: subject,
    text: message,
  };

  // Send the email message
  transporter.sendMail(mail, (err) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send('Email sent successfully');
    }
  });
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
