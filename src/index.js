import cipher from './cipher.js';



// console.log(cipher);


 window.addEventListener("load", start, true);

function start (){
  document.getElementById("original").addEventListener(
    "keyup",
    function (){
      this.value = this.value.toUpperCase();
    },
    true
  );
}

// La wea del type="Module" es complicado pero en internet dice que para crear funciones,variables,etc
// tienes que usar window.nombrevariable = *lo que quieres hacer(funciones,datos,objetos,arrays)*
window.eventCode = function eventCode(){

    let originalMessage = document.getElementById("original").value;
    let shift = document.getElementById("shift").value;

    if (originalMessage === "" || shift === ""){
        alert ("Debe Llenar campo");
    };

    let encodeMessage = cipher.encode(originalMessage,shift); 

    document.getElementById("encrypted").value = encodeMessage;
    
    
    // Aqui debes obtener los datos del TextArea y Shift y guardarlos en variables
    // y despues se lo pasas como argumentos a la funcion encode que esta en el cipher.js

    // cipher.encode()
    // Aqui adentro llamas la funcion encode(argumento1, argumento2)
}

