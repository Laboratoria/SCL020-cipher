window.addEventListener("load", inicio, true);

function inicio() {
    document.getElementById("nombreCard").addEventListener("keyup", function() { // el elemento mensaje  
        this.value = this.value.toUpperCase();
    }, true);
    /*-------------------NOMBRE---------------------*/
    document.getElementById("cifrar").addEventListener("click", function() {
        let texto1 = document.getElementById("nombreCard").value; // mensaje que entra 
        let desplazamiento = document.getElementById("posicionCifrar").value;
        document.getElementById("mensaje2").value = cifrar(texto1, desplazamiento); //mensaje que sale 
    }, true);
    /*----------------------NUMERO-----------------------*/
    document.getElementById("cifrar").addEventListener("click", function() {
        let texto1 = document.getElementById("numeroCard").value; // mensaje que entra 
        let desplazamiento = document.getElementById("posicionCifrar").value;
        document.getElementById("number").value = cifrar1(texto1, desplazamiento); //mensaje que sale 
    }, true);
    /*----------------------EXPIRACION MES-----------------------*/
    document.getElementById("cifrar").addEventListener("click", function() {
        let texto1 = document.getElementById("desplazamiento1").value; // mensaje que entra 
        let desplazamiento = document.getElementById("posicionCifrar").value;
        document.getElementById("texto1").value = cifrar1(texto1, desplazamiento); //mensaje que sale 
    }, true);
    /*----------------------EXPIRACION AÑO-----------------------*/
    document.getElementById("cifrar").addEventListener("click", function() {
        let texto1 = document.getElementById("desplazamiento2").value; // mensaje que entra 
        let desplazamiento = document.getElementById("posicionCifrar").value;
        document.getElementById("texto2").value = cifrar1(texto1, desplazamiento);

        //mensaje que sale 
    }, true);

}

function cifrar(texto1, desplazamiento) {
    let resultado = "";
    let letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    desplazamiento = (desplazamiento % 26 + 26) % 26;

    if (texto1) {
        for (let i = 0; i < texto1.length; i++) {
            if (letras.indexOf(texto1[i]) != -1) {
                let posicion = ((letras.indexOf(texto1[i]) + desplazamiento) % 26);
                resultado += letras[posicion];
            } else
                resultado += texto1[i];
        }

    }
    console.log(resultado)
    return resultado;
}

function cifrar1(texto1, desplazamiento) {
    let resultado = "";
    let letras = "0123456789";

    desplazamiento = (desplazamiento % 26 + 26) % 26;

    if (texto1) {
        for (let i = 0; i < texto1.length; i++) {
            if (letras.indexOf(texto1[i]) != -1) {
                let posicion = ((letras.indexOf(texto1[i]) + desplazamiento) % 26);
                resultado += letras[posicion];
            } else
                resultado += texto1[i];
        }

    }
    console.log(resultado)
    return resultado;
}