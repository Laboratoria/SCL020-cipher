import cipher from './cipher.js';

console.log(cipher);
document.getElementById("welcomebtn").addEventListener("click", function() {window.location ="avatar.html";
}) 
  /* USANDO LOCAL STORAGE*/
  
function getName() {
  let userName = document.getElementById('user-name').value;
  localStorage.setItem('userName', userName);
  let nameLocalStorage = localStorage.getItem('userName');
  
  document.getElementById("avatarh2").innerHTML = "¡Hola " + nameLocalStorage + " vamos a jugar!";
  }
 /*COPIAR*/ 
let text= document.getElementById("encrypted");
  btn.addEventListener('click', e => {
      text.select();
      document.execCommand('copy');
    })
