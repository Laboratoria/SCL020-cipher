/*REDIRECCION A PAGINAS con window.location*/
document.getElementById("welcomebtn").addEventListener("click", function() {window.location = "avatar.html";
})
document.getElementById("avatarbtn").addEventListener("click", function() {window.location = "firstGame.html";
console.log(holi)
})
document.getElementById("firstGamebtn").addEventListener("click", function() {window.location = "secondGame.html";
})
document.getElementById("SecondGamebtn").addEventListener("click", function() {window.location = "endingGame.html";
})
document.getElementById("endingGamebtn").addEventListener("click", function() {window.location = "index.html";
})



/*function btnFirstPage() {
    window.location = "/avatar.html";
 }
function btnSecondPage() {
    window.location = "/firstGame.html";
 }  
function btnThirdPage() {
    window.location = "/secondGame.html";
 }  
function btnEndingPage() {
    window.location = "/endingGame.html";
 }   
function btnWelcomePage() {
    window.location = "/welcome.html";
 }/*
  
  /* USANDO LOCAL STORAGE*/
function getName() {
   let userName = document.getElementById('user-name').value;
   localStorage.setItem('userName', userName);
   let nameLocalStorage = localStorage.getItem('userName');
  document.getElementById("print-name").innerHTML = "¡Hola " + nameLocalStorage + " vamos a jugar!";
}
let text= document.getElementById("encrypted");
btn.addEventListener('click', e => {
  text.select();
  document.execCommand('copy');
  })