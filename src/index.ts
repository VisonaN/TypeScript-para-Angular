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
    let ligado:boolean = true; // Dessa forma a variavel só aceita o tipo colocado antes de atribuir o valor
//              -> colocando o tipo da variável
// Tem outra maneira que vai ser tipada por inferência, que é quando não declara o tipo da variável antes de atribuir valor nela:
    let ligadu = false;
    let nome:string = "Paulo Visoná";
    let idade:number = 27;
    let altura:number = 1.65; // Pode colocar números decimais 

// TIPOS ESPECIAIS: null e undefined
    let nulo:null = null;
    // Nesse caso o tipo null só pode receber o valor null mesmo
    let indefinido:undefined = undefined; // Mesma coisa da null

// TIPOS ABRANGENTES: any e void
    let retorno:void // Usa o tipo void quando realmente não é pra retornar nada // Por ser vazio não tem que adicionar valor dentro
    let retornoView:any = "Aceita qualquer coisa"; // Utilizar :any quando você tem uma função que pode retornar algo não previsível, pode retornar um objeto, void, string...