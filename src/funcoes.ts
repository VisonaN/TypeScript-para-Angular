// Funções => Mesma coisa do JS, só que os parâmetros da função são tipáveis e o retorno também, e quando você vai associar a função a uma variável você tem que tipar a variável de acordo com o tipo da função também para que ela seja aceita

function addNumber(x:number,y:number):number{
    return x + y;
}

let soma:number = addNumber(20,46);

console.log(soma);