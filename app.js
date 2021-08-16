const express = require('express')
const multer = require('multer')
const upload = multer()
const sendMail = require('./sendMail')
const app = express()

const port = 7777

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})



app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.post('/api/sendmail', upload.none(), (req, res) => {
  let {name, email, phone} = req.body
  sendMail(name, email, phone)
  console.log(name, email, phone)
  console.log(req.method, req.body, req.headers['content-type'])
  res.send(`<h1>name: ${req.body.name}</br>email: ${req.body.email}</br>phone: ${req.body.phone}</h1>`)
})