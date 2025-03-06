// Aos animation
AOS.init();

// Seleciona os botões de abrir e fechar o menu
let menu = document.querySelector("header");
let hamburguerOn = document.querySelector(".fa-solid.fa-bars");
let hamburguerOff = document.querySelector(".fa-solid.fa-xmark");

// Adiciona um evento de click no botão de abrir o menu - Mobile
hamburguerOn.addEventListener("click", () => {
  if (hamburguerOn) {
    hamburguerOn.style.display = "none";
    hamburguerOff.style.display = "block";
    menu.style.display = "block";
  }
});
hamburguerOff.addEventListener("click", () => {
  if (hamburguerOff) {
    hamburguerOff.style.display = "none";
    hamburguerOn.style.display = "block";
    menu.style.display = "none";
  }
});

// Evento no top da página
let 

// Accordions Skills
function toggleAccordeon(index) {
  // Selecionando os controles
  const contents = document.querySelectorAll(".accordion-content");
  const iconAcco = document.querySelectorAll(".accordion-header i");

  // Accordion
  contents.forEach((content, i) => {
    if (i === index) {
      content.classList.toggle("show");
    } else {
      content.classList.remove("show");
    }
  });
  // Accordion arrow
  iconAcco.forEach((cont, indice) => {
    if (indice === index) {
      cont.classList.toggle("animation");
    } else {
      cont.classList.remove("animation");
    }
  });
}

// Cancela o evento padrão do click do Acordion 
let links = document.querySelectorAll(".accordion-header");
links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
  });
});


// Evento na sessão de portfólio - evento de click e mostra os itens relacionado
document.querySelectorAll(".link").forEach((link) => {
  // Quando clicar no alvo faz esse evento
  link.addEventListener("click", function (event) {
    event.preventDefault(); // Evita o evento padrão do click

    let target = this.getAttribute("data-target"); // seleciona o alvo do click e pega o atributo
    let selecaoAlvo = document.getElementById(target); // Seleciona o elemento uma única vez
    

    //Caso o elemento não exista
    if (!selecaoAlvo) {
      return;
    }

    // Esconde todos os conteúdos
    document.querySelectorAll(".port-galery-container").forEach((div) => {
      div.style.display = "none";
      div.style.opacity = "0";
    }); 

    //Exibe o elemento alvo com a transição suave
    selecaoAlvo.style.display = "flex";
    setTimeout(() => {
      selecaoAlvo.style.opacity = "1";
    }, 300);
  });
});
