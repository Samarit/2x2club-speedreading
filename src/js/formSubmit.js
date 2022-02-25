import { validate } from "validate.js"
import formInvalidateInputs from "./formInvalidateInputs"
import formSend from "./formSend"
import formValidate from "./formValidate"

const forms = document.querySelectorAll('form')

forms.forEach( form => {

  form.onsubmit = (e) => {
    e.preventDefault()

    let formData = new FormData(form)
    let validateResult = formValidate(form)

    console.log( validateResult )

    formInvalidateInputs(form, validateResult)

    if ( validateResult ) return false
    formSend('/api/sendmail', formData)
  }
})