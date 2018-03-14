
window.onload = function(){ };


var formulario = document.forms["myform"];

var text1 = formulario["username"];
var text2 = formulario["mail"];
var text3 = formulario["pass"];
var text4 = formulario["confpass"];

var radios = formulario["transport"];
var radio="";
for(var k =0; k< radios.length; k++){
if(radios[k].checked == true){
radio= radios[k].value;
break;
}
}
 var int;
 var texto = document.getElementById('visualizar');

 function visualizar(){
      var that = this;
     clearTimeout(int)
     int = setTimeout(function(){texto.value = that.value; console.log(that.value)},500)
     ;}
 
 text1.addEventListener("keyup",visualizar);
 text2.addEventListener("keyup",visualizar);
 text3.addEventListener("keyup",visualizar);
 text4.addEventListener("keyup",visualizar);


// window.addEventListener("load",inicio,false);
// function inicio(){
//      var inputNombre = document.forms["altaUsuario"]["inputNombre"];
// 
//      inputNombre.addEventListener("Keyup",validaNombre,false);
// }
// 
//
// function validaNombre(){
//   var nombre = document.forms["altaUsuario"]["inputNombre"]; nombre = input
//   // /^[A-z]{3,15}$/
//   var RegExPattern = /^[A-z]{3,15}$/;
//   
//   if (inputNombre.value.match(RegExPattern)) { // comprovamos el matching con match
//   inputNombre.style.border="1px solid green";
//   var document.forms["altaUsuario"]["textarea"].innerHTML="El nom es correcte";
//   inputNombre.nextElementSibling.innerHTML="OK";
//   
//   }else{
//   inputNombre.style.border="1px solid red";
//   var document.forms["altaUsuario"]["textarea"].innerHTML="El nom es incorrecte";
//   inputNombre.nextElementSibling.innerHTML="ERROR ha de tenir entre 3 i 15 lletres";
//   }
//   console.log(nombre);
//
//    }