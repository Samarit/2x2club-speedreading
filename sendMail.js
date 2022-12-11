const nodemailer = require('nodemailer')
const { google } = require('googleapis')
const OAuth2 = google.auth.OAuth2

// Tokens from ".env" file
require('dotenv').config()

const _createTransporter = async () => {
  // Prepaere gmail auth client 
  const oauth2client = new OAuth2(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    "https://developers.google.com/oauthplayground"
  )

  oauth2client.setCredentials({
    refresh_token: process.env.REFRESH_TOKEN
  })

  const accessToken = await new Promise((resolve, reject) => {
    oauth2client.getAccessToken((err, token) => {
      if (err) {
        reject(err)
      }
      resolve(token)
    })
  })

  // Production auth/host
  const host = {
    service: 'gmail'
  }

  const auth =  {
    type: "OAuth2",
    user: process.env.EMAIL,
    accessToken,
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    refreshToken: process.env.REFRESH_TOKEN
  }

  // Final transport create
  let transporter = nodemailer.createTransport({
    ...host,
    auth: auth
  })

  return transporter
}

async function sendMail(name, email, phone, course) {

  course = course === "mental" ? "Ментальная арифметика" : "Скорочтение"

  try {

    const emailTransporter = await _createTransporter()

    const status = await emailTransporter.sendMail({
      from: `${name} <${email}>`,
      to: "warlockultras2008@yandex.ru",
      subject: `Заявка ${phone} ${name}`,
      text: "",
      html: `<h3>Заявка на запись на курсы от:</h3>
              <p>Имя: ${name}</p>
              <p>Телефон: ${phone}</p>
              <p>Email: ${email}</p>
              <p>Курс: ${course}</p>
            `
    })
    
    return status
    
  } catch(err) {
    console.log(err)
    return err
  }
}

module.exports = sendMail