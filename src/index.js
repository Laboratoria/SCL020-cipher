import cipher from './cipher.js';

const btnEncode = document.getElementById("btn-encode");



if (btnEncode) {
    btnEncode.addEventListener('click', ()=>{
        let original = document.getElementById("original").value;
        let offset = document.getElementById("offset").value;
        let result = cipher.encode(offset, original);
        document.getElementById("encrypted").innerHTML = result;
    });
}



const btnDecode = document.getElementById("btn-decode");

if (btnDecode) {
    btnDecode.addEventListener('click', ()=>{
        let original = document.getElementById("original").value;
        let offset = document.getElementById("offset").value;
        let result = cipher.decode(offset, original);
        document.getElementById("encrypted").innerHTML = result;
    });
}

/* WINDOW LOCATIONS */


const btnWelcome = document.getElementById("welcomebtn");

if (btnWelcome) {
    btnWelcome.addEventListener('click', ()=>{
        window.location = "instructions.html";
    });
}

const btnins = document.getElementById("instructionsbtn");

if (btnins) {
    instructionsbtn.addEventListener('click', ()=>{
        window.location = "firstGame.html";
    });
}

const btnfirstGame = document.getElementById("firstGamebtn");

if (btnfirstGame) {
    btnfirstGame.addEventListener('click', ()=>{
        window.location = "secondGame.html";
    });
}

const btnsecondGame = document.getElementById("secondGamebtn");

if (btnsecondGame) {
    btnsecondGame.addEventListener('click', ()=>{
        window.location = "endingGame.html";
    });
}

const btnendingGame = document.getElementById("endingGamebtn");

if (btnendingGame) {
    btnendingGame.addEventListener('click', ()=>{
        window.location = "index.html";
    });
}


/* ALTERNATIVAS */

const altA = document.getElementById("alt-a");{
    altA.addEventListener("click", ()=>{
        alert("Oh oh.. ¡Intentalo de nuevo!");
    })
}

const altB = document.getElementById("alt-b");{
    altB.addEventListener("click", ()=>{
        alert("Oh oh.. ¡Intentalo de nuevo!");
    })
}

const altC = document.getElementById("alt-c");{
    altC.addEventListener("click", ()=>{
        alert("¡Tu si sabes tus respuestas!");
    })
}