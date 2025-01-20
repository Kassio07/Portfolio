// Seleciona os botões de abrir e fechar o menu
let menu = document.querySelector('header');
let hamburguerOn = document.querySelector(".fa-solid.fa-bars");
let hamburguerOff = document.querySelector('.fa-solid.fa-xmark');

// Adiciona um evento de click no botão de abrir o menu
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

//dropdown-content, evento do click off

// Seleciona todos os link da página
let links = document.querySelectorAll("a");

// Adiciona um evento de click em cada link
links.forEach(link => {
    link.addEventListener("click", (event) => {
        event.preventDefault();
    });
});


