// Loader

const loading = document.getElementById('loading')

window.onload = function() {
    loading.className = 'loading loading__hide'

    setInterval(function() {
        AOS.init()
        loading.remove()
    }, 1000)
}

// Nav

const navBtn = document.getElementById('nav-btn')
const nav = document.getElementById('nav')
const mobileMenu = document.getElementById('mobile-menu')
const headerContainer = document.getElementById('header-container')

function toggleMenu() {
    if (mobileMenu.className === 'nav__menu_mobile menu__close') {
        mobileMenu.className = 'nav__menu_mobile menu__open'
        nav.className = 'fixed'
        headerContainer.className = 'header__container height-fix'
    } else {
        mobileMenu.className = 'nav__menu_mobile menu__close'
        nav.className = ''
        headerContainer.className = 'header__container'
    }
}

navBtn.addEventListener('click', toggleMenu)

// About

const cardsCard = document.getElementsByClassName('section__cards_card')
const skillsHeader = document.querySelectorAll('.card__skills_header')

function toggleSkills() {
    const itemClass = this.parentNode.className

    const counters = document.querySelectorAll('.card__skills_counter')

    for (let i = 0; i < cardsCard.length; i++) {
        cardsCard[i].className = 'section__cards_card skills__close'
        
        counters.forEach(counter => {
            counter.innerHTML = 0
        })
    }

    for (let i = 0; i < skillsHeader.length; i++) {
        skillsHeader[i].className = 'card__skills_header'
    }

    if (itemClass === 'section__cards_card skills__close') {
        this.parentNode.className = 'section__cards_card skills__open'

        if (this.parentNode.id == 'front-end') {
            skillsHeader[1].className = 'card__skills_header hide'
            skillsHeader[2].className = 'card__skills_header hide'
        } else if (this.parentNode.id == 'python') {
            skillsHeader[0].className = 'card__skills_header hide'
            skillsHeader[2].className = 'card__skills_header hide'
        } else if (this.parentNode.id == 'ethical-hacking') {
            skillsHeader[0].className = 'card__skills_header hide'
            skillsHeader[1].className = 'card__skills_header hide'
        }

        counters.forEach(counter => {
            const animate = () => {
                const value =+ counter.getAttribute('percent')
                const data =+ counter.innerHTML.slice(0, -1)
                const time = value / 200

                if (data < value) {
                    counter.innerHTML = Math.ceil(data + time) + '%'
                    setTimeout(animate, 1)
                } else {
                    counter.innerHTML = value + '%'
                }
            }

            animate()
        })
    }
}

skillsHeader.forEach((el) => {
    el.addEventListener('click', toggleSkills)
})

// Projects

let slideIndex = 1

const showSlides = (n) => {
    const slides = document.getElementsByClassName('section__cards_project')

    if (n > slides.length) {
        slideIndex = 1
    }

    if (n < slides.length) {
        slideIndex = slides.length
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none'
    }

    slides[slideIndex - 1].style.display = 'flex'
}

showSlides(slideIndex)

const plusSlides = (n) => {
    showSlides(slideIndex += n)
}