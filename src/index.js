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


const btnWelcome = document.getElementById("welcomeBtn");

if (btnWelcome) {
    btnWelcome.addEventListener('click', ()=>{
        window.location = "instructions.html";
    });
}

const btnInst = document.getElementById("instBtn");

if (btnInst) {
    btnInst.addEventListener('click', ()=>{
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


