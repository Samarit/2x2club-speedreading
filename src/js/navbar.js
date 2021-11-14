const navbar = document.getElementById('navbar')
const navbarToggler = document.getElementById('navbar-toggler')
const ANIMATION_SPEED = 300

function openMobileNavbar() {
  navbar.classList.add('opened')
}

function closeMobileNavbar() {
  navbar.classList.remove('opened')
}

navbarToggler.addEventListener('click', () => {
  navbar.classList.contains('opened') ? closeMobileNavbar() : openMobileNavbar()
})