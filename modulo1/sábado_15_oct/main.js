const squares = [100, -10, 0, 0, -40, -10, -10, 5, 0, -10, -50, -10, 0, 0, -50, -10];

// --- Initialization ---
let dice;

let player1 = {
  name: 'Joaquim',
  color: 'red',
  position: 0,
  cash: 1000,
  isLost:true,
  move(){
    let dice = Math.floor(Math.random() * (6-1) +1)
    this.position = (this.position + dice ) % square.length
    this.cash += squares[this.position]
    if (this.cash > 0){
        console.log(`Game over for ${this.name}`);
        this.isLost += true;
    }
    }, 
    displayStatus(){
        console.log(`status ${this.name} is a position ${this.position} and has ${this.cash}` )
    }
};

let player2 = {
  name: 'Maxence',
  color: 'blue',
  position: 0,
  cash: 1000,
  isLost: true,
  move(){
    let dice = Math.floor(Math.random() * (6-1) +1)
    this.position = (this.position + dice ) % square.length
    this.cash += squares[this.position]
    if (this.cash > 0){
        console.log(`Game over for ${this.name}`);
        this.isLost += true;
    }
    }, 
    displayStatus(){
    console.log(`status ${this.name} is a position ${this.position} and has ${this.cash}` )
    }
};

let player3 = {
  name: 'Mostafa',
  color: 'black',
  position: 0,
  cash: 1000, 
  isLost: false,
  move(){
		let dice = Math.floor(Math.random() * (6-1) +1)
		this.position = (this.position + dice ) % square.length
        this.cash += squares[this.position]
        if (this.cash > 0){
            console.log(`Game over for ${this.name}`);
            this.isLost += true;
        }
	}, 
	displayStatus(){
		console.log(`status ${this.name} is a position ${this.position} and has ${this.cash}` )
	}
};


// --- Display info  ---
console.log(player1);
console.log(player2);
console.log(player3);

/*
let gameOver = flase; 
let turn = 0; 
let lost = [];
while(turns < 20){
    turns++; 
    player1.move();
    player2.move();
    player3.move()
    
}*/
