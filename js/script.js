// Adiciona mais segurança ao código evitando erros silenciosos
"use strict";

// Aos animation
AOS.init();

// Seleciona os botões de abrir e fechar o menu
const menu = document.querySelector("header");
const hamburguerOn = document.querySelector(".fa-solid.fa-bars");
const hamburguerOff = document.querySelector(".fa-solid.fa-xmark");
const menuLinks = document.querySelectorAll(".menuLinks ul li a");

// Adiciona um evento de click no botão de abrir o menu - Mobile
function toggleMenu() {
  menu.classList.toggle("openClose");
  hamburguerOn.classList.toggle("menuToggle");
  hamburguerOff.classList.toggle("menuToggle");

  // Impede que o body tenha scroll
  document.body.classList.toggle("no-scroll");
}
hamburguerOn.addEventListener("click", toggleMenu);
hamburguerOff.addEventListener("click", toggleMenu);

// Esconde o menu lateral ao clicar em algum link
if (window.innerWidth <= 960) {
  menuLinks.forEach((el) => {
    el.addEventListener("click", function () {
      toggleMenu();
    });
  });
}

// texto do topo com a imagem
const texto = 'Desenvolvedor Full Stack Jr. </>';
const fraseEl =  document.getElementById("frase");
let i = 0;

function escrever(){
  if(i < texto.length){
    fraseEl.textContent += texto.charAt(i);
    i++;
    setTimeout(escrever, 80);
  }
}
escrever();


// slide About
function slideAbout(){
  const wrapper = document.querySelector('.slide-wrapper');
  let images = document.querySelectorAll('.slide-wrapper img'); // Seleciona todas as imagem
  let widthImg = images[0].clientWidth; // Largura da imagem
  let slideQt = images.length; // Pega a Quantidade de imagem
  let courrentSlide = 0;

  function nextslide(){
    courrentSlide++;
    if(courrentSlide >= slideQt) courrentSlide = 0;

    wrapper.style.transform = `translateX(-${widthImg * courrentSlide}px)`;
  }

  setInterval(nextslide, 4000);

}
slideAbout();

// Accordions Skills
function toggleAccordeon(index) {
  // Selecionando os controles
  const contents = document.querySelectorAll(".accordion-content");
  const iconAcco = document.querySelectorAll(".accordion-header .fa-caret-up");

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
// Seleciona todos os links e mapea eles.
document.querySelectorAll(".link").forEach((link) => {
  // Quando clicar no alvo faz esse evento
  link.addEventListener("click", function (event) {
    // Evita o evento padrão do click
    event.preventDefault();

    // Limpa a class active de todos os link
    document.querySelectorAll(".link").forEach((el) => {
      el.classList.remove("active");
    });

    // Adiciona a class active ao link clicado
    this.classList.add("active");

    // seleciona o alvo do click e pega o atributo
    let target = this.getAttribute("data-target");
    // Seleciona o elemento uma única vez
    let selecaoAlvo = document.getElementById(target);

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
      selecaoAlvo.querySelectorAll(".galery-item").forEach((el) => {
        el.style.opacity = "1"; // Agora sim, aparece suavemente
      });

      AOS.refresh();
    }, 100);
  });
});

// Validação do formulario de contato
function msgAlert() {
  let form = document.querySelector("#meuForm");
  // controles dos campos do form
  let nomeInput = document.getElementsByName("nome")[0];
  let emailInput = document.getElementsByName("email")[0];
  let textAssunto = document.getElementsByName("assunto")[0];
  let requer = document.querySelectorAll(".requer");
  let msgAtencao = document.querySelector(".msgAtencao");

  // Ao começar digitar no campo, elimine a borda vermelha e alerta de mensagem
  [nomeInput, emailInput, textAssunto].forEach((input, index) => {
    input.addEventListener("input", () => {
      input.style.border = "";
      if (requer[index]) {
        requer[index].classList.remove("ativo");
      }
    });
  });

  form.addEventListener("submit", (e) => {
    // Pega o valor dos campos e formata a string eliminando os spaços indesejados
    let nome = nomeInput.value.trim();
    let email = emailInput.value.trim();
    let assunto = textAssunto.value.trim();
    // Variavel de erro
    let temError = false;

    // Verifica se digitou o nome
    if (!nome) {
      nomeInput.style.border = "1px solid red";
      if (requer[0]) {
        requer[0].classList.add("ativo");
      }
      temError = true;
    }

    // Verifica se digitou o email
    if (!email) {
      emailInput.style.border = "1px solid red";
      if (requer[1]) {
        requer[1].classList.add("ativo");
      }
      temError = true;
    }
    // Verifica se digitou o Assunto
    if (!assunto) {
      textAssunto.style.border = "1px solid red";
      if (requer[2]) {
        requer[2].classList.add("ativo");
      }
      temError = true;
    }

    // Se tiver erro, não envia o formulário e apresenta msg de error!
    if (temError) {
      e.preventDefault();
      msgAtencao.style.display = 'block';
      msgAtencao.innerText = "Por favor preencha todos os campos antes do envio!";
      // Oculta a mensagem de texto
      setTimeout(()=>{
      msgAtencao.style.display = 'none';
      }, 4000)
    }
  });
}
// Executa
document.addEventListener("DOMContentLoaded", msgAlert);