import cipher from './cipher.js';

console.log(cipher);

/*REDIRECCION A PAGINAS con window.location*/
document.getElementById("indexPage").addEventListener("click", ()=>{
  window.location = "avatar.html"
})
  
let secondPage = document.getElementById("secondPage")
secondPage.addEventListener("click", ()=>{
  window.location = "firstGame.html"
})


function btnThirdPage() {
  window.location = "/secondGame.html";
}
  
function btnEndingPage() {
  window.location = "/welcome.html";
  }
  
  /* USANDO LOCAL STORAGE*/
  
  function getName() {
  let userName = document.getElementById('user-name').value;
  localStorage.setItem('userName', userName);
  
  let nameLocalStorage = localStorage.getItem('userName');
  
  document.getElementById("print-name").innerHTML = "¡Hola " + nameLocalStorage + " vamos a jugar!";
  }
  
  //let text= document.getElementById("encrypted");
  //btn.addEventListener('click', e => {
      //text.select();
      //document.execCommand('copy');
    //})
