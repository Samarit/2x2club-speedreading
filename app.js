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


app.post('/api/sendmail', upload.none(), async (req, res) => {

  let {name, email, phone, course} = req.body

  let status = await sendMail(name, email, phone, course)

  console.log(name, email, phone, course)
  console.log(req.method, req.body, req.headers['content-type'])
  console.log(`status: ${status}`)

  res.send(status)

})