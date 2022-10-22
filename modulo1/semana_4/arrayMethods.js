
function testArgument(){
    console.log('que son: ', arguments);
}

testArgument('perro', 'gato', true, 124,[12,23,35])


console.log('students', students);

/*
map itera en un arreglo y además cera un nuevo arreglo
Estructura array.map(cb) // cb callback function => función anónima 
cb de un map regresa tres parámetros: 
1) elemento evaluando 
2) Índice o posición del elemento actual 
3) Arregelo original

array.map((item, index, originalArray) => {...})
*/

const onlyNames = students.map((student, index, originalArray)=>{
    //console.log(student,index,originalArray)
    return student.name;
});
console.log(onlyNames);


/*
filter crea un nuevo arreglo cumpliendo la condición
Estructura array.filter(cb) // cb callback function => función anónima 
cb de un filter regresa tres parámetros: 
1) elemento evaluando 
2) Índice o posición del elemento actual 
3) Arregelo original

array.filter((item, index, originalArray) => {...})
*/
const bestStudents = students.filter((student, index, originalArray)=>{
    return student.finalExam >= 70
});
console.log(bestStudents);


const noLopez = students.filter((student, index, originalArray)=>{
    return !(student.name.toLowerCase().includes('López'.toLowerCase()) 
    || student.name.toLowerCase().includes('Lopez'.toLowerCase()))
});


console.log(noLopez);

//reduce .reduce((acumulador, item actual) => acumulador inicializado
const elements = [1,2,3,4,5,6,7,]

const sum = elements.reduce((acc, cv) => {
    return acc += cv
}, 0)





