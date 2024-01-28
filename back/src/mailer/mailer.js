import nodemailer from 'nodemailer';

const email = process.env.LUNARI_EMAIL;
const password = process.env.LUNARI_PASSWORD;

//configuracion 
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  service: 'Gmail', 
  auth: {
    user: email,
    pass: password,
  },
  });

export function sendEmail(destinationEmail, link){
    //plantilla de email
    const mailOptions = {
        from: 'lunariservices@gmail.com',
        to: destinationEmail,
        subject: 'Validá tu cuenta',
        text: `Haz clic en el siguiente enlace para validar tu cuenta: ${link}`,
    };

    // Envía el correo electrónico
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
        console.error('Error al enviar el correo electrónico:', error);
        } else {
        console.log('Correo electrónico enviado:', info.response);
        }
    });
}