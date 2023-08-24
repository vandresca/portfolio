const { MailtrapClient } = require("mailtrap");

const TOKEN = "********097f";
const ENDPOINT = "https://send.api.mailtrap.io/";

const client = new MailtrapClient({ endpoint: ENDPOINT, token: TOKEN });

const sender = {
  email: "victorac1981@gmail.com",
  name: "Mailtrap Test",
};
const recipients = [
  {
    email: "vandresca@outlook.es",
  }
];

client
  .send({
    from: sender,
    to: recipients,
    subject: "You are awesome!",
    text: "Congrats for sending test email with Mailtrap!",
    category: "Integration Test",
  })
  .then(console.log, console.error);
