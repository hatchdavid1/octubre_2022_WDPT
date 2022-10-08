// Functions 
function sayHi(){
    return 'Hola, cómo estás ? '
}
// Invoke or call 
console.log(sayHi());

// Funciones que regresen la suma de dos números 
function suma(numero1, numero2){
    return numero1 + numero2
}
// Que diga adiós 
function sayGoodbye(){
    return 'Adiós '
}
// Que diga Hola tuNombre
function tuNombre(nombre){
    return `Hola ${nombre}`
}
console.log(suma(3,4));
console.log(sayGoodbye());
console.log(tuNombre('David'));

// funciones que regresan objetos 
function getUserInfo(firstnName, lastName){
    const user= {
        firstnName:firstnName,
        lastName:lastName
    }
    return user
}
// Almacenamos el valor de una función en una variable
const userData = getUserInfo('David', 'Hatch');
console.log('userData:', userData.firstnName);
console.log('userData:', userData['lastName']);

// Arrow functions 
function getArray(value1, value2, value3){
    const arr = [value1, value2, value3];
    return arr;
}
const favoriteArr = getArray('tacos', 'tortas', 'Pizza');
console.table(favoriteArr);
console.log(`mi comida favorita es ${favoriteArr[0]}`);

// Función para medir la longitud de un string y saber si es par o impar 
function oddOrpai(cadena){
    if (cadena.length %2==0){
        console.log(`${cadena} es un string con longitud par`);
    } else {
        console.log(`${cadena} es un string con longitud impar`);
    }
}
oddOrpai('Parangaricutirimicuaro')