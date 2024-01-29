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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
//console.log(aniversario.toString());
// Funções => Mesma coisa do JS, só que os parâmetros da função são tipáveis e o retorno também, e quando você vai associar a função a uma variável você tem que tipar a variável de acordo com o tipo da função também para que ela seja aceita
function addNumber(x, y) {
    return x + y;
}
function addToHello(name) {
    return `Hello ${name}`;
}
// As funções no TS permitem você também declarar um OU nos tipos que você quer que retorne (number | string) e para o retorno quando vc tá fazendo uma função que vai retornar algo de um banco de dados você pode declarar tanto como :any quanto :number | string MAS É RECOMENDADO NÃO USAR ANY NO RETORNO, SEMPRE USAR OS TIPOS QUE VOCÊ ACHA MAIS PREVISÍVEIS QUE VÃO RETORNAR
function CallToPhone(phone) {
    return phone;
}
let soma = addNumber(20, 46);
//console.log(CallToPhone("(32)98451-1953"));
// Funções assincronas (Sempre que usar o assync em uma função ela vai retornar uma Promise do tipo do valor que você quer retornar). Então quando você fizer uma função assincrona e declara o retorno o TS vai mostrar de forma implicita o tipo do retorno da promisse e ai vc declara o retorno da função de forma explícita pra um código melhor
function getDatabase(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return "Paulo";
    });
}
const bot = {
    id: 1,
    name: "Megaman",
};
;
const bot2 = {
    id: 1,
    name: "Megaman",
};
;
const bot3 = {
    id: "2",
    name: "Éoq",
    sayHello() {
        return "Hello";
    },
};
class Pessoa {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    sayHello() {
        return `Hello, i am ${this.name}`;
    }
}
const p = new Pessoa(1, "Paulo");
console.log(p.sayHello());
