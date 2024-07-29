const nodemailer = require('nodemailer');

// Remplacer par vos informations
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'yourmail@gmail.com',
    pass: 'yourpassword'
  }
});

const   
 mailOptions = {
  from: 'yourmail@gmail.com',
  to: 'myfriend@yahoo.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!.'
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});