




function perro(){
    try {
        return 0 + count;
    } catch(error){
        console.error(error)
    } finally{
        console.log('final');
    }
}
 // Reverse sólo se aplica a un Array 

const numbers = [2,3,5];

numbers.sort()

console.log('sort', numbers);

function compare(a,b){
    if (a<b)return -1
    if (a>b)return 1
    if (a===b)return 0
}

let numbers2 = [22, 23, 99, 68, 1, 0, 9, 112, 223, 64, 18];

// numbers2.sort(compare()) así no funciona por que está regresando el valor de la función que es un número
// numbers2.sort(compare) así sí funciona 
// Sólo números
numbers.sort((a,b) => a-b); // a se ordena antes que b 
numbers.sort((a,b) => b-a); // b se ordena antes que a


// Sólo letras o palabras
const letters = ['a', 'c', 'b'];
function Compare(a,b){return a.localeCompare(b)}
// Para letras
letters.sort(Compare);

function Compare(a,b){return a.localeCompare(b)}

const student = [
    {name:"Dylan",age:29},
    {name:"Jesús",age:21},
    {name:"Cristian", age:36},
    {name: "Jose", age: 30},
    {name:"Diego", age: 22},
    {name:'David', age:27},
    {name:"Mar", age: 25},
    {name: "alfredo", age: 34},
    {name: "Kain", age:39},
    {name: "Oscar", age:39},
    {name: "Karla", age:18},
    {name: "Alexa", age:22}
];

function compareStudent(a,b){
    return a.name.localeCompare(b.name);
}

student.sort(compareStudent)

student.sort((a,b ) => a.age-b.age)