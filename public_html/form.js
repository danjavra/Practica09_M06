
var formulario = document.forms["myform"];

var text = formulario["username"].value;
var text = formulario["mail"].value;
var text = formulario["pass"].value;
var text = formulario["confpass"].value;

var radios = formulario["transport"];
var radio="";
for(var k =0; k< radios.length; k++){
if(radios[k].checked == true){
radio= radios[k].value;
break;
}
}

