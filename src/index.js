const lenguajes = ["python","ruby","c#","javascript","cobol","assembly","ajax","ruby","javascript","scratch","delphi","j#","perl","lisp","lua","go","haskell","tcl","sas","groovy","r","pascal","prolog",".net","javascript"];
let totalVeces = 0;
for (let i = 0; i < lenguajes.length; i++) {
    console.log(lenguajes[i])
  if (lenguajes[i] === "javascript") {
    totalVeces++;
  }
}
alert("La cantidad de veces que aparece javascript es: " + totalVeces)

