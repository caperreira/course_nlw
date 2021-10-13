// Abre e fecha o menu ao clicar no icone
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

// Quando clicar em um iten do menu, esconder o menu.
const links = document.querySelectorAll('nav ul li a')
for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

// Mudar o header da pagina ao der scroll

// Adicionando o Scroll a pagina movendo a pagina.
function changeHeaderWhenScroll() {
  const header = document.querySelector('#header')
  const navHeight = header.offsetHeight // ele vai pegar este elemento quando o header mudar a altura.

  if (window.scrollY >= navHeight) {
    //scroll é maior que a altura do header
    header.classList.add('scroll')
  } else {
    // menor que a altura do header
    header.classList.remove('scroll')
  }
}

const scroll = document.querySelector('body header')

/*Testimonial Carrocel  - */
const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2 /* Mostra a quantidade de slides */,
      setWrapperSize: true
    } /* Vai encobrir os slides*/
  }
})

/* SCROLLREAVEAL == Mostrar elementos quando rolar a pagina*/

const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `
#home .text, #home .image, 
#about .image, #about .text,
#services header, #services .card, 
#testimonials header, #textimonial .textimonials, 
#contact .text, #contact .link, 
#footer .brand, #foote .social`,

  { interval: 100 }
)

/* Botão voltar para o topo*/

function backToTop() {
  const backToTopButton = document.querySelector('.back-to-top')
  /* Vai pegar toda a janela.*/
  if (window.scrollY >= 560) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

/* Menu ativo conforme seção ativo na pagina*/
const section = document.querySelectorAll(' main section[id]')

function activateMenuAtCurrentSection() {
  /* Esta pegando da janela o dislocamento Y*/
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

  for (const section of sections) {
    const sectionTop = section.offsetTop /* Esta pegando o topo da seção*/
    const sectionHight =
      section.offsetHeight /* Esta pegando a altura da seção*/
    const sectionId =
      section.getAttribute('id') /* Esta pegando o ID da seção. */

    checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHight

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector('nav ul li a [href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('nav ul li a [href*=' + sectionId + ']')
        .classList.remove('active')
    }
  }
}

/* Esta função esta recebendo as funções conforme estão dentro de seus metodos.*/
window.addEventListener('scroll', function () {
  changeHeaderWhenScroll()
  backToTop()
  activateMenuAtCurrentSection()
})
