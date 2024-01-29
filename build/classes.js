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
// COLOCAR 'readonly' antes de um atributo faz com que ele seja somente lido e não alterado fora da classe
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
//p1.attack();
/**
 * DATA MODIFIERS (MODIFICADORES DE ACESSO) PODEM SER APLICADOS EM ATRIBUTOS E EM MÉTODOS
 * public (colocar o public antes do atributo é o mesmo que não colocar nada, você pode acessar o atributo fora da classe) TODOS VEEM O ATRIBUTO
 * private (quando colocado private antes do atributo faz com que ele só possa ser acessado dentro da classe) SOMENTE A CLASSE VÊ O ATRIBUTO
 * protected (quando colocado o protected antes do atributo faz com que ele so consiga ser enchergado dentro da classe e das subclasses que herdam a classe) A CLASSE E A SUBCLASSE QUE HERDA A CLASSE VÊ O ATRIBUTO
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
//p2.attack();  Não consegue acessar o name por aqui e nem o método attack
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
//p3.attack();
// EX PROTECTED:
class Character4 {
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
const p4 = new Character3("ahmed", 10, 53);
//p4.attack();
// SUBCLASSES:
// Character é um superclasss (classe pai)
class Character5 {
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
// Magician é uma subclass (classe filha)
class Magician extends Character5 {
    constructor(name, strength, skill, magicPoints) {
        super(name, strength, skill); // Para invocar o construtor da classe pai se n da erro
        this.magicPoints = magicPoints;
    }
    ;
}
const p5 = new Magician("Mago", 9, 30, 100);
