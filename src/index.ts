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
// Mas é melhor criar um objeto tipado para receber mais de um tipo para não correr risco de dar algum erro e diferente da Tupla ele aceita dois valores independente da ordem

// MÉTODOS PARA TRABALHAR COM ARRAYS (Os mesmos métodos do JS) = map()/pop()/Entre outros

// Tuplas => Tupla é um vetor de multi tipos, porém tem um lugar certo para cada tipo declarado na criação da tupla:
// Nesse exemplo a ordem tem que ser string - numero - numero, fora dessa ordem acusaria erro
let boleto:[string, number, number] = ["conta agua", 186.90, 735612];

// DATAS NO TS

let aniversario:Date = new Date("2024-01-24 14:25");
//console.log(aniversario.toString());

// Funções => Mesma coisa do JS, só que os parâmetros da função são tipáveis e o retorno também, e quando você vai associar a função a uma variável você tem que tipar a variável de acordo com o tipo da função também para que ela seja aceita

function addNumber(x:number,y:number):number{
    return x + y;
}

function addToHello(name:string):string{
    return `Hello ${name}`;
}

// As funções no TS permitem você também declarar um OU nos tipos que você quer que retorne (number | string) e para o retorno quando vc tá fazendo uma função que vai retornar algo de um banco de dados você pode declarar tanto como :any quanto :number | string MAS É RECOMENDADO NÃO USAR ANY NO RETORNO, SEMPRE USAR OS TIPOS QUE VOCÊ ACHA MAIS PREVISÍVEIS QUE VÃO RETORNAR

function CallToPhone(phone:number | string):any {
    return phone;
}

let soma:number = addNumber(20,46);

//console.log(CallToPhone("(32)98451-1953"));

// Funções assincronas (Sempre que usar o assync em uma função ela vai retornar uma Promise do tipo do valor que você quer retornar). Então quando você fizer uma função assincrona e declara o retorno o TS vai mostrar de forma implicita o tipo do retorno da promisse e ai vc declara o retorno da função de forma explícita pra um código melhor

async function getDatabase(id:number):Promise<string>{
    return "Paulo";
}

//console.log(getDatabase(23));

// INTERFACES (Parecidas com o type)

// Type: Um tipo que é um objeto de agregados

type robot = {
    id: number;
    name: string;
};

const bot: robot = {
    id: 1,
    name: "Megaman",
};

// Interface: (Igual o type mas não recebe o simbolo de = )

interface robot2 {
    id: number;
    name: string;
};

const bot2: robot2 = {
    id:1,
    name: "Megaman"
};

// Diferenças: Type é geralmente mais usado para tipar um objeto e Interface é mais utilizada quando vai trabalhar com class