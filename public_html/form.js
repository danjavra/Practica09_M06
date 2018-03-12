
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
     int = setTimeout(function(){text1.value = that.value},500)
     ;}
 
 text1.addEventListener("keyup",visualizar);
 text2.addEventListener("keyup",visualizar);
 text3.addEventListener("keyup",visualizar);
 text4.addEventListener("keyup",visualizar);


