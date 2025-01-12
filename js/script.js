
let menu = document.querySelector('header');
let hamburguerOn = document.querySelector(".fa-solid.fa-bars");
let hamburguerOff = document.querySelector('.fa-solid.fa-xmark');


hamburguerOn.addEventListener("click", ()=>{
    if(hamburguerOn){
        hamburguerOn.style.display = 'none';
        hamburguerOff.style.display = 'block';
        menu.style.display = 'block';
    }
});
hamburguerOff.addEventListener("click", ()=>{
    if(hamburguerOff){
        hamburguerOff.style.display = 'none';
        hamburguerOn.style.display = 'block';
        menu.style.display = 'none';
    }
});