"use strict";
/*
type hero={
    name: string;
    vulgo: string;
};

function printObjects(pessoa: hero) {
    console.log(pessoa);
}

printObjects({
    name: "Bruce Wayne",
    vulgo: "Batman",
});

// Para executar o ts no node tem que colocar o comando no terminal: npx (node package exporter) e tsc (typescript compyler) e aí depois colcoar o src/index.ts para traduzir o que foi feito em TS para JS e aí sim pode executar o código
*/
/**
 * Variáveis
 */
// TIPOS DE DADOS PRIMITIVOS: boolean, number, string
let ligado = true; // Dessa forma a variavel só aceita o tipo colocado antes de atribuir o valor
//              -> colocando o tipo da variável
// Tem outra maneira que vai ser tipada por inferência, que é quando não declara o tipo da variável antes de atribuir valor nela:
let ligadu = false;
let nome = "Paulo Visoná";
let idade = 27;
let altura = 1.65; // Pode colocar números decimais 
// TIPOS ESPECIAIS: null e undefined
let nulo = null;
// Nesse caso o tipo null só pode receber o valor null mesmo
let indefinido = undefined; // Mesma coisa da null
// TIPOS ABRANGENTES: any e void
let retorno; // Usa o tipo void quando realmente não é pra retornar nada // Por ser vazio não tem que adicionar valor dentro
let retornoView = "Aceita qualquer coisa"; // Utilizar :any quando você tem uma função que pode retornar algo não previsível, pode retornar um objeto, void, string...
let meuProduto = {
    name: "Tênis",
    price: 90.91,
    unities: 12
};
// Arrays podem ser declarados de duas formas:
// 1
let dados = ["Paulo", "Mylla", "Minie"];
// 2
let dados2 = ["Paulo", "Mylla", "Minie"];
// No TS você pode declarar arrays de dois tipos (ou multi tipos)
let infos = ["Paulo", 27, "Mylla", 24];
// Mas é melhor criar um objeto tipado para receber mais de um tipo para não correr risco de dar algum erro e diferente da Tupla ele aceita dois valores independente da ordem
// MÉTODOS PARA TRABALHAR COM ARRAYS (Os mesmos métodos do JS) = map()/pop()/Entre outros
// Tuplas => Tupla é um vetor de multi tipos, porém tem um lugar certo para cada tipo declarado na criação da tupla:
// Nesse exemplo a ordem tem que ser string - numero - numero, fora dessa ordem acusaria erro
let boleto = ["conta agua", 186.90, 735612];
// DATAS NO TS
let aniversario = new Date("2024-01-24 14:25");
console.log(aniversario.toString());
