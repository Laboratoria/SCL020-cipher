/*REDIRECCION A PAGINAS con window.location*/

function btnFirstPage() {
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
  }
  
  /* USANDO LOCAL STORAGE*/
  
  function getName() {
  let userName = document.getElementById('user-name').value;
  localStorage.setItem('userName', userName);
  
  let nameLocalStorage = localStorage.getItem('userName');
  
  document.getElementById("print-name").innerHTML = "¡Hola " + nameLocalStorage + " vamos a jugar!";
  }
  
  let text= document.getElementById("encrypted");
  //let button= document.getElementById("btn");
  btn.addEventListener('click', e => {
      text.select();
      document.execCommand('copy');
    })