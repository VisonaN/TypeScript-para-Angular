/* DECORATORS => É quando decora uma função para que dispare alguma outra ação depois

function ExibirNome(target:any){
    console.log(target);
}

@ExibirNome // Tem que colocar o decorator em cima de onde você quer exibir
class Funcionario {}

@ExibirNome // Tem que colocar o decorator em cima de onde você quer exibir
class Quincas{}
*/

function apiVersion(version:string){
    return (target:any) => {
        Object.assign(target.prototype, {__version: version, __name: "Paulo"})
    }
}
// Sempre que você chamar um decorator ele vai injetar um comportamento/gatilho na sua classe mas não necessariamente vai ser utilizado. Vai ser utilizado internamente para outras coisas como uma validação ou algo assim
// @apiVersion("1.10")  Class decorator

// Attribute decorator

function minLength(length:number) {
    return (target:any, key: string) => {
        let _value = target[key]; // target á a propriedade name
        //console.log(key);  key é o valor passado dentro da const api = new Api("Produtos"), nesse caso
        const getter = () => _value; // Metodo de leitura
        const setter = (value:string) => { // Metodo de escrita
            if (value.length < length) {
                throw new Error(`Tamanho menor do que o ${length}`);
            }else{
                _value = value;
            };
        };
        Object.defineProperty(target, key, {
            get: getter,
            set: setter,
        });
    };
}

class Api{
    @minLength(3) // Limita o tamanho minimo
    name:string;

    constructor(name:string) {
        this.name = name;
    }
}

const api = new Api("Users");
console.log(api.name);