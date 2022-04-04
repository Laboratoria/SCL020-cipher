const cipher = {
  // ...
};

export default cipher;
function encodeCesar() {
  
  let original = document.getElementById("original").value;
  let displace = document.getElementById("displace").value;
  let newOriginalCode = "";
  let cipher = "";

  console.log(original);
  console.log(typeof displace);

  for (let i=0; i < original.length; i++) {

      let originalCode = original[i].charCodeAt();
      console.log(originalCode);
      if ((originalCode >= 65) && (originalCode <= 90)) {
        newOriginalCode = ((originalCode - 65 + parseInt(displace)) % 26 + 65);
      }
      else {
        alert("SOLO LETRAS MAYUSCULAS");
        break;
      }
    cipher += String.fromCharCode(newOriginalCode);
  }
    document.getElementById("encrypted").innerHTML = cipher;
}




function decodeCesar() {

  let original = document.getElementById("original").value;
  let displace = document.getElementById("displace").value;
  let newOriginalCode = "";
  let cipher = "";

  console.log(original);
  console.log(typeof displace);

  for (let i=0; i < original.length; i++) {

      let originalCode = original[i].charCodeAt();
      console.log(originalCode);
      if ((originalCode >= 65) && (originalCode <= 90)) {
        newOriginalCode = ((originalCode - 65 - parseInt(displace)) % 26 + 65);
      }
      else {
        alert("SOLO LETRAS MAYUSCULAS");
        break;
      }
    cipher += String.fromCharCode(newOriginalCode);
  }
    document.getElementById("encrypted").innerHTML = cipher;
}









/*
function cipherCesar(original, displace) {
  let cipher = "";
  let newletter = ""; 
  let i = 0;
  let original = document.getElementById("original").value;
  let displace = document.getElementById("displace").value;
  let newOriginalCode = "";

  for (i=0; i < original.length; i++) {
      let originalCode = original.charCodeAt(i);

      if (originalCode >= 65 && originalCode <= 90){ 
        newOriginalCode = (originalCode + displace)%26;
      }
    
      else {
        alert("nada esta pasando");
      }
   }
        cipher += String.fromCharCode(newOriginalCode);
  } 
  document.getElementById("encrypted").innerHTML = cipher;
}*/