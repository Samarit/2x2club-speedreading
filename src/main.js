import './css/_entry.sass'
import './js/navbar'
import IMask from 'imask'
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


// Phone inputs mask
const phoneInputs = document.querySelectorAll('input[type="phone"]')

let maskPhoneOptions = {
  mask: '+{7}(000)000-00-00',
  lazy: false
}

phoneInputs.forEach((input) => {
  IMask(input, maskPhoneOptions)
})



// Teachers and reviews slider initialization
document.addEventListener('DOMContentLoaded', function() {

  const elms = document.querySelectorAll('.slider')

  for (let i = 0, len = elms.length; i < len; i++) {
    new ChiefSlider(elms[i], {
      autoplay: false,
      refresh: true // Refresh slider if amount of showed elements changes
    })
  }
})

// Tickets slider init
document.addEventListener('DOMContentLoaded', function() {

  const elms = document.querySelectorAll('.slider-tickets')

  for (let i = 0, len = elms.length; i < len; i++) {
    new ChiefSlider(elms[i], {
      autoplay: false,
      loop: false,
      refresh: true // Refresh slider if amount of showed elements changes
    })
  }
})




