import './css/main.sass'
import IMask from 'imask'
import formValidate from './js/formValidate'
import validate from 'validate.js'

const modalForm = document.getElementById('modalForm')
const inputName = document.getElementById('inputName')
const inputEmail = document.getElementById('inputEmail')
const inputPhone = document.getElementById('inputPhone')

let maskPhoneOptions = {
  mask: '+{7}(000)000-00-00',
  lazy: false
}
let maskPhone = IMask(inputPhone, maskPhoneOptions)

modalForm.onsubmit = (e) => {
  e.preventDefault()
  modalForm.classList.add('was-validated')

  let errors = formValidate(modalForm)
  console.log(errors)
  
  let formData = new FormData(modalForm)
  formData.set('phone', maskPhone.unmaskedValue)

  if (!errors) {
    fetch('/api/sendmail', {
      method: 'POST',
      body: formData
    })
  }
  
}




