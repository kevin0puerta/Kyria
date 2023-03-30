/* multitud */

var hombres=document.querySelector(".hombres");
hombres.addEventListener("click", izquierda);
function izquierda(){
    hombres.classList.add("movhombres")
} 

var mujeres=document.querySelector(".mujeres");
mujeres.addEventListener("click", derecha);
function derecha(){
    mujeres.classList.add("movmujeres")
} 

/* guardias */

var guardia1=document.querySelector(".guardia1");
guardia1.addEventListener("click", pasar);
function pasar(){
    guardia1.classList.add("movguardia1")
} 

var guardia2=document.querySelector(".guardia2");
guardia2.addEventListener("click", pasar1);
function pasar1(){
    guardia2.classList.add("movguardia2")
} 

var guardia2=document.querySelector(".guardia2");
guardia1.addEventListener("click", pasar2);
function pasar2(){
    guardia2.classList.add("movguardia2")
} 

var guardia1=document.querySelector(".guardia1");
guardia2.addEventListener("click", pasa3);
function pasa3(){
    guardia1.classList.add("movguardia1")
} 

/* coronacion */

var alejandro=document.querySelector(".alejandro");
alejandro.addEventListener("click", alejo);
function alejo(){
    alejandro.classList.add("movalejo")
} 

var olimpia=document.querySelector(".olimpia");
olimpia.addEventListener("click", olimpia1);
function olimpia1(){
    olimpia.classList.add("movolimpia")
} 

var coronacion2=document.querySelector(".alejandro");
olimpia.addEventListener("click", olimpia2);
function olimpia2(){
    coronacion2.classList.add("movalejo")
} 

var coronacion=document.querySelector(".olimpia");
alejandro.addEventListener("click", olimpia3);
function olimpia3(){
    coronacion.classList.add("movolimpia")
} 

/* blah */

var conversacion1=document.querySelector(".blah");
hombres.addEventListener("click", bulla);
function bulla(){
    conversacion1.classList.add("oblah")
} 

var conversacion2=document.querySelector(".blah1");
hombres.addEventListener("click", bulla1);
function bulla1(){
    conversacion2.classList.add("oblah1")
} 

var conversacion3=document.querySelector(".blah2");
mujeres.addEventListener("click", bulla2);
function bulla2(){
    conversacion3.classList.add("oblah2")
} 

var conversacion4=document.querySelector(".blah3");
mujeres.addEventListener("click", bulla3);
function bulla3(){
    conversacion4.classList.add("oblah3")
} 

/* texto */

var texto= document.querySelector(".texto2");
olimpia.addEventListener("click", escribir);
function escribir(){
    texto.classList.add("movcuadro2")
} 

var cuadro=document.querySelector(".t-principal2");
olimpia.addEventListener("click", aparecer);
function aparecer(){
    cuadro.classList.add("movtext2")
} 

var flecha=document.querySelector(".flecha");
olimpia.addEventListener("click", capitulo);
function capitulo(){
    flecha.classList.add("movflecha")
}  

var espada=document.querySelector(".espada");
olimpia.addEventListener("click", siguiente);
function siguiente(){
    espada.classList.add("movespada")
}  


var texto1= document.querySelector(".texto2");
alejandro.addEventListener("click", escribir2);
function escribir2(){
    texto1.classList.add("movcuadro2")
} 

var cuadro1=document.querySelector(".t-principal2");
alejandro.addEventListener("click", aparecer2);
function aparecer2(){
    cuadro1.classList.add("movtext2")
} 

var flecha1=document.querySelector(".flecha");
alejandro.addEventListener("click", capitulo2);
function capitulo2(){
    flecha1.classList.add("movflecha")
}  

var espada1=document.querySelector(".espada");
alejandro.addEventListener("click", siguiente2);
function siguiente2(){
    espada1.classList.add("movespada")
}  