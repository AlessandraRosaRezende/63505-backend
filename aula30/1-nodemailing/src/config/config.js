require('dotenv').config();

module.exports = {
  email: process.env.EMAIL,
  password: process.env.PASSWORD,
  accountSid: process.env.TWILIO_ACCOUNT_SID,
  accountToken: process.env.TWILIO_ACCOUNT_TOKEN,
  number: process.env.TWILIO_SMS_NUMBER,
}