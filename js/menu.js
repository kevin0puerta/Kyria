let burger = document.querySelector(".burger");

burger.addEventListener("click", () =>
burger.classList.toggle("active"));

let opciones=document.querySelector(".opciones");
burger.addEventListener("click",()=>
opciones.classList.toggle("aparecer"));

let plegable=document.querySelector(".opaco");
burger.addEventListener("click",()=>
plegable.classList.toggle("movopaco"));
