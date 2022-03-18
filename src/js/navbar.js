const navbar = document.getElementById('navbar')
const navbarToggler = document.getElementById('navbar-toggler')
const links = navbar.querySelectorAll('.navbar-link')

function openMobileNavbar() {
  navbar.classList.add('opened')
}

function closeMobileNavbar() {
  navbar.classList.remove('opened')
}

navbarToggler.addEventListener('click', () => {
  navbar.classList.contains('opened') ? closeMobileNavbar() : openMobileNavbar()
})

links.forEach((link) => {
  link.addEventListener('click', () => {
    closeMobileNavbar()
  })
})
