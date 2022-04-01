const cipher = {
  
  encode,
  decode


};

export default cipher;


function encode(originalMessage,shift){

  let result="";
  let alphabet= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  shift = ((shift % 26)+ 26) % 26;
  // 26 * 1 = 26  
  // 26 * 2 = 52
  // 26 * 3 = 78
  console.log("Este es el shift %26", shift % 26);


  for (let i = 0; i < originalMessage.length; i++){
    if (alphabet.indexOf(originalMessage[i]) != -1)
    {

      console.log(originalMessage[i]);
      let position = (alphabet.indexOf(originalMessage[i]) + shift ) % 26;
      result += alphabet[position];

    } else {
      result += originalMessage[i];
    }
  }
 return result;
}


function decode(){

  console.log("mensaage decifrado");
}