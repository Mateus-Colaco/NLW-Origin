const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

const links = document.querySelectorAll('nav ul li a')
for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

function shadowHeaderWhenScroll() {
  const header = document.querySelector('#header')
  const navHeight = header.offsetHeight
  if (window.scrollY >= navHeight) {
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }
}

const swiper = new Swiper('.swiper', {
  loop: true,
  slidesPerView: 1,
  pagination: { el: '.swiper-pagination' },
  mousewheel: true,
  keyboard: true
})

/* ScrollReveal */

const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '2.5rem',
  duration: 700,
  reset: true
})
scrollReveal.reveal(
  `
  #home .text, 
  #home .image, 
  #about .image, 
  #about .text, 
  #services header, 
  #services .card,
  #testimonials header,
  #testimonials .testimonials,
  #contact .text,
  #contact .links,
  footer .items
  `,
  { interval: 85 }
)

/* button-back-to-top */
function backToTop() {
  const backToTopButton = document.querySelector('.back-to-top')
  if (window.scrollY >= 375) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

window.addEventListener('scroll', function () {
  backToTop()
  shadowHeaderWhenScroll()
})
