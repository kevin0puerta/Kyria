var video5=document.querySelector(".video5");
var cerezo=document.querySelector(".cerezo");
cerezo.addEventListener("click", play);
function play(){
    video5.classList.add("movvideo5")
}  

var texto5= document.querySelector(".texto5");
cerezo.addEventListener("click", escribir5);
function escribir5(){
    texto5.classList.add("movcuadro5")
} 

var cuadro5=document.querySelector(".t-principal5");
cerezo.addEventListener("click", aparecer5);
function aparecer5(){
    cuadro5.classList.add("movtext5")
} 


var flecha5=document.querySelector(".flecha5");
cerezo.addEventListener("click", capitulo5);
function capitulo5(){
    flecha5.classList.add("movflecha5")
}  

var espada5=document.querySelector(".espada5");
cerezo.addEventListener("click", siguiente5);
function siguiente5(){
    espada5.classList.add("movespada5")
} 