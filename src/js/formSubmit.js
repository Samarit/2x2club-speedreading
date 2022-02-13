import formSend from "./formSend"

const forms = document.querySelectorAll('form')

forms.forEach( form => {

  form.onsubmit = (e) => {
    e.preventDefault()

    let formData = new FormData(form)

    formSend('/api/sendmail', formData)
  }
})