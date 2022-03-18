import './css/_entry.sass'
import './js/navbar'
import IMask from 'imask'
import formValidate from './js/formValidate'
import validate from 'validate.js'
import './js/formSubmit'

import modal from './js/modal'

const buttonsModalLesson = document.querySelectorAll('*[data-modal-lesson')
const buttonsModalCourse = document.querySelectorAll('*[data-modal-course')

buttonsModalCourse.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    modal.open('course')
  })
})

buttonsModalLesson.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    modal.open('lesson')
  })
})

const inputName = document.getElementById('inputName')
const inputEmail = document.getElementById('inputEmail')
const inputs = document.querySelectorAll('input[type="phone"]')


let maskPhoneOptions = {
  mask: '+{7}(000)000-00-00',
  lazy: false
}

inputs.forEach((input) => {
  let maskPhone = IMask(input, maskPhoneOptions)
})



// Teachers and reviews slider initialization
document.addEventListener('DOMContentLoaded', function() {
  var elms = document.querySelectorAll('.slider')
  for (var i = 0, len = elms.length; i < len; i++) {
    new ChiefSlider(elms[i], {
      autoplay: false,
      refresh: true // Refresh slider if amount of showed elements changes
    })
  }
})

// Tickets slider init
document.addEventListener('DOMContentLoaded', function() {
  var elms = document.querySelectorAll('.slider-tickets')
  for (var i = 0, len = elms.length; i < len; i++) {
    new ChiefSlider(elms[i], {
      autoplay: false,
      loop: false,
      refresh: true // Refresh slider if amount of showed elements changes
    })
  }
})




