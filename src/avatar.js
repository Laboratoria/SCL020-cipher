document.getElementById("avatarbtn").addEventListener("click", function() {window.location = "firstGame.html";
})

function putname() {
let nameLocalStorage = localStorage.getItem('userName');
  document.getElementById("printbtn").innerHTML = "¡Hola " + nameLocalStorage + " vamos a jugar!";
  }

  document.getElementById("printbtn").addEventListener("click", function() {putname();
  })