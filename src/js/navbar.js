const navbar = document.getElementById('navbar')
const navbarToggler = document.getElementById('navbar-toggler')
const ANIMATION_SPEED = 300

function openMobileNavbar() {
  navbar.classList.add('opening')
  setTimeout(() => {
    navbar.classList.remove('opening')
    navbar.classList.add('opened')
  }, ANIMATION_SPEED)
}

function closeMobileNavbar() {
  navbar.classList.remove('opened')
  navbar.classList.add('closing')
  setTimeout(() => {
    navbar.classList.remove('closing')
  }, ANIMATION_SPEED)
}

navbarToggler.addEventListener('click', () => {

  if ( navbar.classList.contains('opening') || navbar.classList.contains('closing') ) { return false } 

  navbar.classList.contains('opened') ? closeMobileNavbar() : openMobileNavbar()
})