require('dotenv').config();
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,  // Your Gmail address
    pass: process.env.EMAIL_PASS   // Use App Password here
  }
});

const mailOptions = {
  from: process.env.EMAIL_USER,
  to: 'jamunjamun277@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'hi jamun!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.error('Error:', error);
  } else {
    console.log('Email sent:', info.response);
  }
});
