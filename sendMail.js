const nodemailer = require('nodemailer')

async function sendMail(name, email, phone, course) {
  try {
    // Need for test only
    let testAccount = await nodemailer.createTestAccount()
    let authTest = {
      user: testAccount.user,
      pass: testAccount.pass
    }
    
    let transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false,
      auth: {
        user: testAccount.user,
        pass: testAccount.pass
      }
    })

    let info = await transporter.sendMail({
      from: `${name} <${email}>`,
      to: "warlockultras2008@yandex.ru",
      subject: `Заявка ${phone} ${name}`,
      text: "",
      html: `<h3>Заявка на запись на курсы от:</h3>
              <p>Имя: ${name}</p>
              <p>Телефон: +${phone}</p>
              <p>Email: ${email}</p>
              <p>Курс: ${course}</p>
            `
    })
    
    
    console.log(testAccount.user)
    console.log('Email sent: ', info.messageId)
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    
    return info
  } catch(err) {
    console.log(err)
    return err
  }
}

module.exports = sendMail