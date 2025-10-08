// Adiciona mais segurança ao código evitando erros silenciosos
"use strict";

// Aos animation
AOS.init();

// Seleciona os botões de abrir e fechar o menu
const menu = document.querySelector("header");
const hamburguerOn = document.querySelector(".fa-solid.fa-bars");
const hamburguerOff = document.querySelector(".fa-solid.fa-xmark");
const menuLinks = document.querySelectorAll(".menuLinks ul li a");
let msg = document.querySelector(".msgAtencao");

// mensagem de alerta
function msgAtencao(){ 
  msg.style.display = 'block';
  setTimeout(()=>{
    msg.style.display = 'none';
    }, 4000)
}

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
    if(document.visibilityState === 'visible'){
      courrentSlide++;
      if(courrentSlide >= slideQt){ 
        courrentSlide = 0;
      }
      wrapper.style.transform = `translateX(-${widthImg * courrentSlide}px)`;
    }
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

