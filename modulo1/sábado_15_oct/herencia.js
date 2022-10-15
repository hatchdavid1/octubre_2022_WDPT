// class & inheritance 
const squares = [100, -10, 0, 0, -40, -10, -10, 5, 0, -10, -50, -10, 0, 0, -50, -10];
let dice;
/*

Estructura clásica de una clase 
class NombreClase{
    this.name = 
}


perroObj = {
    name = 'howl', 
    ladra{}{}
}
*/


class Player{
    // sólo puede haber un constructor en una clase 
    // método 
    constructor(name, color){
        this.name = name; 
        this.color = color; 
        this.position =0; 
        this.cash = 100
    }
    // Métodos funciones que se ejecutan dentro del objeto o clase 
    move() {
        let dice = Math.floor(Math.random() * (6-1) +1)
        this.position = (this.position + dice ) % square.length
        this.cash += squares[this.position]
        if (this.cash > 0){
            console.log(`Game over for ${this.name}`);
            this.isLost += true;
        }
    } 
    displayStatus(){
        console.log(`status ${this.name} is a position ${this.position} and has ${this.cash}` )
    }    
}


const david = new Player('David', 'blue')
const jose = new Player('jose', 'red')
const gerardo = new Player('gerardo', 'orange')

david.move();
david.displayStatus();

// herencia extends
class Pokemon{
    constructor(name, type,size, evolution ){
        this.name = name; 
        this.type = type; 
        this.size = size; 
        this.evolution = evolution; 
        this.region = 'Aloha'; 
        this.game = 'Sword & Shield'; 
        this.hp = 60; 
        this.df = 60;
        this.power = 50;  
        this.master = 'Ash'
    }

    atk(){
        console.log(`${this.name} attacks with ${this.power} points`);
    }
    dfense(){
        console.log(`${this.name} defends with ${this.df} points`);
    }
}

class charmander extends Pokemon{
    // destructurar, method(name,..., ... )
    constructor(name, type, size, evolution, nickname){
        // Super para acceder y llamar a la fucnión padre 
        super(name, type, size, evolution)
        this.nickname = nickname; 
    }
}


const myCharmander = new charmander({size :'9m', type: 'hielo', name: 'charmander', nickname: 'El flamas'})

class Pikachu extends Pokemon{
    constructor({name, type,size, evolution }){
        super(name, type,size, evolution)
    }

    specialMove(){
        console.log("atacas con todo!")
    }
    evolutionX(){
        console.log("evoluciona con todo!")
    }

    //modificar un metodo
    atk(enemy){
        console.log(`${this.name} este pega mas duro  ${this.power} mas 100 extra para dar mas daño points`)
        enemy.defens()
    }
}

let valuesDefault = {
    size:`9m`,
    nickname:"El flamas",type:"hielo", name:"charmander"
} 


const mycharmander = new Charmander(valuesDefault)
const pokemonMar = new Pikachu({ size:`2m`, type:"electrico", name:"pikachu"})


pokemonMar.atk( myCharmander ) //viene en su ejercicio