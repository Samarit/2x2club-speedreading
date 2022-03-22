export default function formInvalidateInputs(form, invals) {

  // invalidations empty => return
  if (!invals) return

  let nameInput = form.querySelector('.name')
  let emailInput = form.querySelector('.email')
  let phoneInput = form.querySelector('.phone')
  
  let {name: nameInval, email: emailInval, phone: phoneInval} = invals

  // If input has error -> add .invalid class
  nameInval && (nameInput.classList.add('invalid'))
  emailInval && (emailInput.classList.add('invalid'))
  phoneInval && (phoneInput.classList.add('invalid'))

  form.addEventListener('click', (e) => {
    nameInput.classList.remove('invalid')
    emailInput.classList.remove('invalid')
    phoneInput.classList.remove('invalid')
  })
  
  console.log(nameInval, emailInval, phoneInval)
}