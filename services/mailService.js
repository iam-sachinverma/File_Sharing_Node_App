const nodemailer = require("nodemailer");

module.exports = async ({ from, to, subject, text, html}) => {

    let transporter = nodemailer.createTransport({
        service: "gmail",
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        // secure: false, // true for 465, false for other ports
        // host: "smtp.gmail.com",
        // port: 465,
        // secure: true,
        auth: {
            type: "OAuth2",
            user: process.env.SENDER_EMAIL,
            clientId: process.env.OAUTH_CLIENT_ID,
            clientSecret: process.env.OAUTH_CLIENT_SECRET,
            accessToken: process.env.OAUTH_ACCESS_TOKEN,
            refreshToken: process.env.OAUTH_REFRESH_TOKEN,
        }
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: `inShare <${from}>`, // sender address
        to: to, // list of receivers
        subject: subject, // Subject line
        text: text, // plain text body
        html: html, // html body
    });

    // console.log(info);

}