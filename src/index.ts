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

/* Objeto -> uma variável definida como objeto vai aceitar qualquer valor desde que esteja dentro de um objeto, ou seja, só vai aceitar um objeto como resposta, independente do que tem dentro dele. (sem previsibilidade)
    let produto:object = {
        name: "Paulo",
        cidade: "jf",
        idade: 27
    };
*/
// Definindo uma estrutura para um objeto tipado - com previsibilidade ->
type ProdutoLoja = {
    name:string;
    price:number;
    unities:number;
};

let meuProduto: ProdutoLoja = {
    name: "Tênis",
    price: 90.91,
    unities: 12
};

// Arrays podem ser declarados de duas formas:
// 1
let dados: string[] = ["Paulo", "Mylla", "Minie"];
// 2
let dados2: Array<string> = ["Paulo", "Mylla", "Minie"];

// No TS você pode declarar arrays de dois tipos (ou multi tipos)

let infos: (string | number)[] = ["Paulo", 27, "Mylla", 24];
// Mas é melhor criar um objeto tipado para receber mais de um tipo para não correr risco de dar algum erro