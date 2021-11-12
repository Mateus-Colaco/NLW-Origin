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
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
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
  backToTopDiv = document.querySelector('.center-button-top')
  if (window.scrollY >= 375) {
    backToTopButton.classList.add('show')
    backToTopDiv.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
    backToTopDiv.classList.remove('show')
  }
}

/*ACTIVE MENU*/
const sections = document.querySelectorAll('main section[id]')
function activateMenuAtCurrentSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4
  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const topLine = checkpoint >= sectionTop
    const bottomLine = checkpoint <= sectionTop + sectionHeight

    if (topLine && bottomLine) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active')
    }
  }
}

/*SCROLL FUNCTIONS*/
window.addEventListener('scroll', function () {
  backToTop()
  shadowHeaderWhenScroll()
  activateMenuAtCurrentSection()
})
