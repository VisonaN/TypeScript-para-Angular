"use strict";
/* GENERICS

function concatArray(...itens:any[]):any[]{ // ... significa que aceita vários itens
    return new Array().concat(...itens);
};
            NESSE CASO COMO ESTÁ ANY VC ACABA QUE PODENDO ADICIONAR UMA STRING EM UM ARRAY QUE ERA PRA SER SÓ NÚMEROS E VICE-VERSA, PARA CORRIGIR ISSO USA-SE <T> DEPOIS DO NOME DA FUNÇÃO E T NOS TIPOS
            E NA HORA DE DECLARAR AS VARIÁVEIS/CONSTANTES, NO LUGAR DO T VOCÊ COLOCA O TIPO QUE QUER RECEBER =>
            const numArray = concatArray<number[]>([1,2], [4]);
            const stringArray = concatArray<string[]>(["Paulo","Visoná"], ["Neto"]);
*/
function concatArray(...itens) {
    return new Array().concat(...itens);
}
;
const numArray = concatArray([1, 2], [4]);
const stringArray = concatArray(["Paulo", "Visoná"], ["Neto"]);
console.log(numArray);
console.log(stringArray);
