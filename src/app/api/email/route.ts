import { type NextRequest, NextResponse, userAgent } from 'next/server';
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';

export type emailResponse = {
  message?:string;
  error?:string;
}

export async function POST(request: NextRequest) {
	const { email, message, honeypot } = await request.json();

  if(userAgent(request).isBot || honeypot.length>0){
    return NextResponse.json({error:'Unsupported behavior detected.'}, {status:403})
  }

	console.log("DATA:",email, message, honeypot)
  if(!process.env.EMAIL || !process.env.EMAIL_PASSWORD){
    console.error('ENV variables not set')
    return NextResponse.json({ error: 'No SMTP credentials.' }, { status: 500 });
  }

  const transport = nodemailer.createTransport({
    service: 'gmail',
    /* 
      setting service as 'gmail' is same as providing these setings:
      host: "smtp.gmail.com",
      port: 465,
      secure: true
      If you want to use a different email provider other than gmail, you need to provide these manually.
      Or you can go use these well known services and their settings at
      https://github.com/nodemailer/nodemailer/blob/master/lib/well-known/services.json
  */
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASSWORD,
    },
    // logger:true,
    // debug:true,
  });

  const mailOptions: Mail.Options = {
    from:'Portfolio ' + process.env.EMAIL,
    to: process.env.EMAIL,
    // cc: email, (uncomment this line if you want to send a copy to the sender)
    subject: `Message from ${email}`,
    text: message,
  };

  const sendMailPromise = () =>
    new Promise<string>((resolve, reject) => {
      transport.sendMail(mailOptions, function (err) {
        if (!err) {
          resolve('Email sent');
        } else {
          reject(err.message);
        }
      });
    });

  try {
    await sendMailPromise();
    return NextResponse.json({ message: 'Sent successfully!' });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}