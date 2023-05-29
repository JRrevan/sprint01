
//Botones de borrado---------------------------------------------------------------

function borrar(){
  var nada = "";
  document.querySelector("#mensaje1").value = nada;

}

function borrar2(){
  var nada = "";
  document.querySelector("#mensaje2").value = nada;

}

var btnborrar = document.querySelector("#borrar"); borrarn.onclick = borrar;
var btnborrar2 = document.querySelector("#borrar2"); borrarn2.onclick = borrar2;


//Botones de copiado---------------------------------------------------------------

const $content = document.getElementById("mensaje1"),
$btn = document.getElementById("copiar");

$btn.addEventListener("click", e => {

    $content.select();
    document.execCommand("copy");
})
//----
const content2 = document.getElementById("mensaje2"),
pepe = document.getElementById("copiar2");

pepe.addEventListener("click", e => {

    content2.select();
    document.execCommand("copy");
})

//Botones de pegado---------------------------------------------------------------

function pegar(){

    navigator.clipboard.readText()
  .then(texto => {
    document.querySelector("#mensaje1").value = texto;
  })
  .catch(error => {
    alert("Hubo un error: ", error);
  });

}

var btnpegar = document.querySelector("#pegarn"); pegarn.onclick = pegar;




  //ENCRIPTADOR---------------------------------------------------------------

  function encriptar (){
    var texto = document.querySelector("#mensaje1").value;
    var textoCifrado = texto.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
    document.querySelector("#mensaje2").value = textoCifrado;

  }
    
  var boton1 = document.querySelector("#btn1"); boton1.onclick = encriptar;

  function desencriptar (){ 
    var texto = document.querySelector("#mensaje1").value; 
    var textoCifrado = texto.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u"); 
    document.querySelector("#mensaje2").value = textoCifrado; 

  }

  var boton2 = document.querySelector("#btn2"); boton2.onclick = desencriptar;

  
