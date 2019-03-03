import nodemailer from 'nodemailer'

function sendMail(to,subject,message) 
{
   var smtpConfig = {
      service: 'Gmail',
      auth: {
          user: 'username@gmail.com',
          pass: 'xxxxxx'
      }
   };
   var transporter = nodemailer.createTransport(smtpConfig);
   var mailOptions = {
      from: '"Sender Name" <sender@gmail.com>', // sender address
      to: to, // list of receivers
      subject: subject, // Subject line
      text: 'Hello world ?', // plaintext body
      html: message // html body
   };
   
   transporter.sendMail(mailOptions, function(error, info){
      if(error)
      {
         return console.log(error);
      }
      else
      {
         return console.log(info.response);
      }      
   }); 
}
var message = '<p>This is HTML content</p>';
sendMail('ajay.agrahari09@gmail.com','Welcome to ExpertPHP.in',message);