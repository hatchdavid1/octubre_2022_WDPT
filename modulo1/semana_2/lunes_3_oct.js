/* 
if (condition) {
  // code to execute if the condition is true
} else {
  // code to execute if the condition is false
}
*/ 
const user = {
    name: 'David', 
    age : 18, 
    id: true, 
    money: 20
}
// user.name = 'David'
if (user.id === true) {
    cosnole.lof(`${user.name} cumple`)
} else if (user.age >= 18){
    cosnole.lof(`${user.name} cumple con la edad`)
}

let result = ''; 
let j = 0; 

// Do while 
do {
    j = j +1;
   result  = result + j;  
} while (j < 5)


for (let i=0; i<=30; i++){
    if (i===10){
        console.log('ten')
    } else if (i===20){
        console.log('twenty')
    } else {
        console.log(i)
    }
}