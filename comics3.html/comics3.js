var alejandro3= document.querySelector(".alejandro3");
alejandro3.addEventListener("click", mandato);
function mandato(){
    alejandro3.classList.add("movalejo3")
} 


var texto3= document.querySelector(".texto3");
alejandro3.addEventListener("click", escribir3);
function escribir3(){
    texto3.classList.add("movcuadro3")
} 

var cuadro3=document.querySelector(".t-principal3");
alejandro3.addEventListener("click", aparecer3);
function aparecer3(){
    cuadro3.classList.add("movtext3")
} 

var flecha3=document.querySelector(".flecha3");
alejandro3.addEventListener("click", capitulo3);
function capitulo3(){
    flecha3.classList.add("movflecha3")
}  

var espada3=document.querySelector(".espada3");
alejandro3.addEventListener("click", siguiente3);
function siguiente3(){
    espada3.classList.add("movespada3")
}  