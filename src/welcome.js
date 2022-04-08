document.getElementById("welcomebtn").addEventListener("click", function() {window.location = "avatar.html";
})

document.getElementById("getnamebtn").addEventListener("click", function() {
    let userName = document.getElementById('user-name').value;
    localStorage.setItem('userName', userName);
    let nameLocalStorage = localStorage.getItem('userName');
document.getElementById("avatarp").innerHTML = "¡Hola " + nameLocalStorage + " vamos a jugar!";
})
