// Cambiar imagenes cuande se precione la flecha

let thumbails = document.querySelector ('.gallery__thumbails');
let previusGalleryBtn = document.querySelector ('.gallery__previus');
let nextGalleryBtn = document.querySelector ('.gallery__next');
let imgIndex = 1;

nextGalleryBtn.addEventListener('click', ()=> {
    changeNextImage(thumbails);
});

previusGalleryBtn.addEventListener('click', ()=> {
    changePreviusImage(thumbails);
});

// ingresar al link de la imagen mobile
thumbails.addEventListener('click', function() {
    if (imgIndex == 1) {
        location.href = "https://erick150-ymf.github.io/Interative-card/"
    } else if (imgIndex == 2){
        location.href = "https://erick150-ymf.github.io/Expense-chart-main/"
    } else if (imgIndex == 3){
        location.href = "https://erick150-ymf.github.io/Notifi/"
    }
});

// ingresar al link de la imagen desktop
let thumbailsImage1 = document.getElementById('i1');
let thumbailsImage2 = document.getElementById('i2');
let thumbailsImage3 = document.getElementById('i3');

thumbailsImage1.addEventListener('click', function() {
    location.href = "https://erick150-ymf.github.io/Interative-card/"
});
thumbailsImage2.addEventListener('click', function() {
    location.href = "https://erick150-ymf.github.io/Expense-chart-main/"
});
thumbailsImage3.addEventListener('click', function() {
    location.href = "https://erick150-ymf.github.io/Notifi/"
});

// Modal navbar
let openModal = document.querySelector('.header__menu');
let closeModal = document.querySelector('.modal-navbar__close-icon');
let modalBackground = document.querySelector('.modal-navbar__background');
let modal = document.querySelector('.modal-navbar');

openModal.addEventListener('click',() => {
    modalBackground.style.display = 'block';
    modal.style.animation = 'abrir 0.5s';
});

closeModal.addEventListener('click', () => {
    modalBackground.style.display = 'none';
    // modal.style.animation = 'cerrar 0.5s' ;
});

// Animaciones
new TypeIt(".About__container--description", {
    strings: "Hola! mi nombre es Erick Moya, soy Frontend Developer Junior como ven me gusta usar los recursos quen encuentro para mejorar mis habilidades como Programador y así optimizar mis proyectos siempre buscando la escalabilidad 😄.",
}).go();

// Funciones
function changeNextImage(imgContainer) {
    if (imgIndex == 3) {
        imgIndex = 1;
    }else {
        imgIndex++;
    }
    imgContainer.style.backgroundImage = `url('../img/Projects/Project-${imgIndex}.png')`;
}
function changePreviusImage(imgContainer) {
    if (imgIndex == 1) {
        imgIndex = 3;
    }else {
        imgIndex--;
    }
    imgContainer.style.backgroundImage = `url('../img/Projects/Project-${imgIndex}.png')`;
}