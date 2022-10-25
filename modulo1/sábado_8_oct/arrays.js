// unshift agreaga al principio del arreglo 
// push agrega al final del arreglo 

// Para remover 
// shift remueve el primer elemento 
// pop remueve el último elemento 
// splice remueve un eleemtno determinando el ínice

const  mixArray = [true, 1, [1,2,3,4], 'David', 'Tacos'];

for (const value of mixArray){
    console.log(value);
}

// For each 
mixArray.forEach(function (item, index, arrayOriginal) {
    
})

// Arrow function 
mixArray.forEach((item, index, arrayOriginal) =>{
    console.log('item', item);
})

const comidas = ['tacos', 'tortas', 'tamales', 'quesadillas']
comidas.forEach((comida, index_comida) =>{
    console.log(comida+'_');
})

// Mismo for Each pero un sin Arrow function y otro con Arrow function
[1,2,3].forEach(function (element) {
    console.log(element *2 );
})

[1,2,3].forEach((element) => console.log(element * 2));

const multMap = [1,2,3].map((element) => {
    return element * 2
})
function printStars(howMany) {
    console.log('*'.repeat(howMany));
  }
  
  [1, 2, 3, 4, 5].forEach(function (num) {
    printStars(num);
  });
  