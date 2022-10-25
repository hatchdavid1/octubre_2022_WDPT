const bonus = [10,30,20,5,50]

class Player{
    constructor(name,atk,defens){
        this.hp = 400;
        this.name=name;
        this.atk=atk;
        this.defens=defens;
    }
        //enemy = {name:2,hp:400,}
    atk(enemy){

        let baseAtk = this.atk
        if(this.hp >  200 ){
            enemy.hp = (baseAtk + bonus[Math.floor(Math.random() * bonus.length )]) - this.defens
        }else{
            enemy.hp = baseAtk  - enemy.defens
        }

        if(enemy >= 0 ){
            console.log(`${enemy.name} perdio KO`)
        }
    }
}

class Mike extends Player{
    constructor(){
        super('Mike', 100, 70)
    }
    bite(enemy){
        enemy.defens = enemy.defens/2
    }
}

const player1 = new Player('David', 80, 100)
const player2 = new Mike()