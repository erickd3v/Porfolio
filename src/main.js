"use strict";

const burggerIcon = document.querySelector('.header__list');
const navbar = document.querySelector('.modal__navbar');

window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    header.classList.toggle('abajo',window.scrollY>0);
})


burggerIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

// Header
const indexHeader = document.querySelector('.inicio-mobile');
const aboutHeader = document.querySelector('.aboutMe-mobile');
const porfolioHeader = document.querySelector('.porfolio-mobile');
const contactHeader = document.querySelector('.contact-mobile');

indexHeader.addEventListener('click', () => {
    location.href = './index.html'
});

aboutHeader.addEventListener('click', () => {
    location.href = './Erick_Moya.html'
});

porfolioHeader.addEventListener('click', () => {
    location.href = './porfolio.html'
});

contactHeader.addEventListener('click', () => {
    location.href = '#Contacto'
});

// Footer
const indexFooter = document.getElementById('inicio');
const aboutFooter = document.getElementById('aboutMe');
const porfolioFooter = document.getElementById('porfolio');
const contactFooter = document.getElementById('contact');

indexFooter.addEventListener('click', () => {
    location.href = './index.html'
});

aboutFooter.addEventListener('click', () => {
    location.href = './Erick_Moya.html'
});

porfolioFooter.addEventListener('click', () => {
    location.href = './porfolio.html'
});

contactFooter.addEventListener('click', () => {
    location.href = '#Contacto'
});

//Conact button

const contactBtn = document.querySelector('.Contact_btn');

contactBtn.addEventListener('click', () => {
    location.href = 'mailto:yusske06@gmail.com'
});

const mail1 = document.querySelector('.mail_text1');
const mail2 = document.querySelector('.mail_text2');

mail1.addEventListener('click', () => {
    location.href = 'mailto:moyae76@gmail.com'
});

mail2.addEventListener('click', () => {
    location.href = 'mailto:yusske06@gmail.com'
});

// redes

const instagram = document.querySelector('.bxl-instagram');
const github = document.querySelector('.bxl-github');
const linkedin = document.querySelector('.bxl-linkedin');

instagram.addEventListener('click', redes);
github.addEventListener('click', redes);
linkedin.addEventListener('click', redes);

function redes() {
    if (instagram === true) {
        location.href= 'https://instagram.com/erick.y.m.f'
    }else if (github) {
        location.href = 'https://github.com/Erick150-ymf'
    } else {
        location.href = 'https://www.linkedin.com/in/erckmoya/'
    }
}