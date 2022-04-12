

const encode = function encodeCesar(offset, original) {
  
    let newOriginalCode = "";
    let cipher = "";

    if(offset <= 0 && original != String){
      throw new TypeError("ERROR");
    }

    for (let i=0; i < original.length; i++) {
  
        let originalCode = original[i].charCodeAt();

        if ((originalCode >= 65) && (originalCode <= 90)) {
          newOriginalCode = ((originalCode - 65 + parseInt(offset)) % 26 + 65);
        }
      cipher += String.fromCharCode(newOriginalCode);
    }
    return cipher;
}



const decode = function decodeCesar(offset, original) {

  let newOriginalCode = "";
  let cipher = "";

  if(offset <= 0 && original != String){
    throw new TypeError("ERROR");
  }

  for (let i=0; i < original.length; i++) {

      let originalCode = original[i].charCodeAt();

      if ((originalCode >= 65) && (originalCode <= 90)) {
        newOriginalCode = ((originalCode - 90 - parseInt(offset)) % 26 + 90);
      }
    cipher += String.fromCharCode(newOriginalCode);
  }
    return cipher;
}



const cipher = {encode, decode}

export default cipher;



