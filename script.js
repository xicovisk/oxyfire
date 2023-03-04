const btnMobile = document.getElementById('btn-mobile');

function menuMobile() {
    const nav = document.getElementById('nav');     //transformar NAV em #ID para da certo
    nav.classList.toggle('active');
}

btnMobile.addEventListener('click', menuMobile);