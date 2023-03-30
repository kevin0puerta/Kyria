var egipto=document.querySelector(".egipto");
egipto.addEventListener("click", pasar);
function pasar(){
    egipto.classList.add("movderecha")
}  

var grecia=document.querySelector(".grecia");
grecia.addEventListener("click", pasar1);
function pasar1(){
    grecia.classList.add("movizquierda")
}  

var persia=document.querySelector(".persia");
persia.addEventListener("click", pasar2);
function pasar2(){
    persia.classList.add("movarriba")
}  

var macedonia=document.querySelector(".macedonia");
macedonia.addEventListener("click", pasar3);
function pasar3(){
    macedonia.classList.add("movabajo")
}  

var alejandro4= document.querySelector(".alejandro4");

var texto4= document.querySelector(".texto4");
alejandro4.addEventListener("click", escribir4);
function escribir4(){
    texto4.classList.add("movcuadro4")
} 

var cuadro4=document.querySelector(".t-principal4");
alejandro4.addEventListener("click", aparecer4);
function aparecer4(){
    cuadro4.classList.add("movtext4")
} 

var flecha4=document.querySelector(".flecha4");
alejandro4.addEventListener("click", capitulo4);
function capitulo4(){
    flecha4.classList.add("movflecha4")
}  

var espada4=document.querySelector(".espada4");
alejandro4.addEventListener("click", siguiente4);
function siguiente4(){
    espada4.classList.add("movespada4")
}  