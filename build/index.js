"use strict";
// Classes => São como uma forma usada para reaproveitar e criar varias coisas a partir dela no mesmo formato
/* Colocar ? antes de passar o valor de um atributo faz com que fiquei opcional. Ex:

class Character {
    name?: string;
    strength: number;
    skill: number;

    constructor(strength:number, skill:number){
        this.strength = strength;
        this.skill = skill;
    }

    attack():void{
        console.log(`Attack with ${this.strength} points.` )
    };
}

*/
class Character {
    constructor(name, strength, skill) {
        this.name = name;
        this.strength = strength;
        this.skill = skill;
    }
    attack() {
        console.log(`Attack with ${this.strength} points.`);
    }
    ;
}
const p1 = new Character("Ahaulk", 10, 53);
p1.attack();
/**
 * DATA MODIFIERS (MODIFICADORES DE ACESSO)
 * public (colocar o public antes do atributo é o mesmo que não colocar nada, você pode acessar o atributo fora da classe)
 * private (quando colocado private antes do atributo faz com que ele só possa ser acessado dentro da classe)
 * protected
 */
// EX PRIVATE:
class Character2 {
    constructor(name, strength, skill) {
        this.name = name;
        this.strength = strength;
        this.skill = skill;
    }
    attack() {
        console.log(`Attack with ${this.strength} points.`);
    }
    ;
}
const p2 = new Character2("Anuak", 10, 53);
console.log(p2);
p2.attack(); // Não consegue acessar o name por aqui
// EX PUBLIC:
class Character3 {
    constructor(name, strength, skill) {
        this.name = name;
        this.strength = strength;
        this.skill = skill;
    }
    attack() {
        console.log(`Attack with ${this.strength} points.`);
    }
    ;
}
const p3 = new Character3("ahmed", 10, 53);
console.log(p3);
