function welcomeMessage(msg){
    msg
}

function byeMessage(msg){
    return msg
}

// function declaration 

console.log(perros());

function perros(){
    return ['sandy', 'luna', 'taco']
}


// Function expression
const comida = function(){
    return 'pozole'
}
console.log(comida());
const animes = () => {
    return 'one piece'
}

function example(){
    setTimeout(function (){
        console.log('Lo logré!!!');
    }, 2000)
}

// Anonymous Functions

(
    function(){
        return `Cualquier cosa`
    }
)();


let user1 = {
    name : 'ana',
    age :25, 
    
    getOlder: function(){
        setInterval(()=>{
            this.age +=1; 
            console.log(this.age);
        })
    }, 
    getName: ()=>{
        console.log(this);
    }
};

//user1.getOlder();
user1.getName();

