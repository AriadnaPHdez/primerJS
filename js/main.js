/* alert("Hola Mundo"); */
/* console.log("Este es otro mensaje..!"); */
var nombre="Ariadna Pérez Hernández"; 
let edad=20;
let titulo=document.getElementById('titulo');
let mensaje= "Mi nombre es "+nombre+" y mi edad es "+(edad+2);
console.log(mensaje);
titulo.innerHTML=mensaje;
titulo.style.color= '0000ee';
titulo.style.textTransform= 'uppercase';
titulo.onclick=function(){
   
    //titulo.innerHTML="Le diste click";
    titulo.innerHTML="<img src='https://c.tenor.com/Fcj2_jhdbisAAAAC/the-office-happy.gif'><p>¡Bienvenido a Javascript!</p>";
    
};