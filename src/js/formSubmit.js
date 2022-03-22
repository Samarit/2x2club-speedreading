import formInvalidateInputs from "./formInvalidateInputs"
import formSend from "./formSend"
import formValidate from "./formValidate"

const forms = document.querySelectorAll('form')

forms.forEach( form => {

  form.onsubmit = (e) => {
    e.preventDefault()

    let validateResult = formValidate(form)

    formInvalidateInputs(form, validateResult)

    if ( validateResult ) return false
    
    formSend('/api/sendmail', form)
  }
  
})

