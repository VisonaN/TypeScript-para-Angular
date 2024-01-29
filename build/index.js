"use strict";
// GENERICS
function concatArray(...itens) {
    return new Array().concat(...itens);
}
;
const numArray = concatArray([1, 2], [4]);
const stringArray = concatArray(["Paulo", "Visoná"], ["Neto"]);
numArray.push("Alow casada");
console.log(numArray);
console.log(stringArray);
