// Seleciona os botões de abrir e fechar o menu
let menu = document.querySelector('header');
let hamburguerOn = document.querySelector(".fa-solid.fa-bars");
let hamburguerOff = document.querySelector('.fa-solid.fa-xmark');

// Adiciona um evento de click no botão de abrir o menu - Mobile
hamburguerOn.addEventListener("click", () => {
    if (hamburguerOn) {
        hamburguerOn.style.display = 'none';
        hamburguerOff.style.display = 'block';
        menu.style.display = 'block';
    }
});
hamburguerOff.addEventListener("click", () => {
    if (hamburguerOff) {
        hamburguerOff.style.display = 'none';
        hamburguerOn.style.display = 'block';
        menu.style.display = 'none';
    }
});

// Accordions Skills
function toggleAccordeon(index) {
    const contents = document.querySelectorAll('.accordion-content');
    contents.forEach((content, i) => {
        if (i === index) {
            content.classList.toggle('show')
        } else {
            content.classList.remove('show')
        }
    });
}

// Cancela o evento padrão do click
let links = document.querySelectorAll('.accordion-header');
links.forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
    });
});

