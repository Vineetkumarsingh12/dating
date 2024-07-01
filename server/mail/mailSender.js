import nodemailer from 'nodemailer';   

 const mailSender = async (to,subject,text) => {
  console.log("service",process.env.SERVICE);
  console.log("pass",process.env.PASSWORD);
  console.log("user",process.env.EMAIL)
    try{
      console.log("in mail sender");
        const transporter = nodemailer.createTransport({
            host: process.env.SERVICE,
            auth: {
              user: process.env.EMAIL,
              pass: process.env.PASSWORD
            }
          });
          console.log("transporter",transporter);
          const mailOptions = {
            from:'CodingWorld - by vineet',
            to: `${to}`,
            subject:`${subject}` ,
            html: `${text}`
          };
          console.log("mailOptions",mailOptions);
          const mailResponse=await transporter.sendMail(mailOptions);
          console.log("mailResponse",mailResponse);
          return mailResponse;
    }catch(err){
        console.log("error in sending email");
    }
}
export { mailSender};
