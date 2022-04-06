/*REDIRECCION A PAGINAS con window.location*/
document.getElementById("welcomebtn").addEventListener("click", function() {window.location ="avatar.html";
})
document.getElementById("avatarbtn").addEventListener("click", function() {window.location ="firstGame.html";
})
document.getElementById("welcomebtn").addEventListener("click", function() {window.location ="avatar.html";
})
document.getElementById("firstGamebtn").addEventListener("click", function() {window.location ="secondGame.html";
})
document.getElementById("SecondGamebtn").addEventListener("click", function() {window.location ="endingGame.html";
})
document.getElementById("endingGamebtn").addEventListener("click", function() {window.location ="index.html";
})
  
<<<<<<< HEAD
  /* USANDO LOCAL STORAGE*/
let userName = document.getElementById('user-name').value;
 localStorage.setItem('userName', userName);
 let nameLocalStorage = localStorage.getItem('userName');
 document.getElementById("print-name").innerHTML = "¡Hola " + nameLocalStorage + " vamos a jugar!";

/*boton copiado*/  
=======
 function getName() {
  let userName = document.getElementById('user-name').value;
  localStorage.setItem('userName', userName);
  
  let nameLocalStorage = localStorage.getItem('userName');
  
  document.getElementById("print-name").innerHTML = "¡Hola " + nameLocalStorage + " vamos a jugar!";
  }
  
>>>>>>> 2156e6f3ce426ccf890a9c23586f88ad12cc8c42
  let text= document.getElementById("encrypted");
  btn.addEventListener('click', e => {
      text.select();
      document.execCommand('copy');
    })
