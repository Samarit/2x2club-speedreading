const express = require('express')
const multer = require('multer')
const upload = multer()
const sendMail = require('./sendMail')
const app = express()
const cors = require('cors')

const NODE_ENV = process.env.NODE_ENV

const port = NODE_ENV === 'production' ? 80 : 7777

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})


app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())


app.post('/api/sendmail', upload.none(), async (req, res) => {

  let {name, email, phone, course} = req.body

  let status = await sendMail(name, email, phone, course)

  res.send(status)

})