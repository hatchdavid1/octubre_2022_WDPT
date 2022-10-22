const products = [
    {name:'Thor HAmmer', price : 100, cant : 2},
    {name:'Batman Toy', price : 300, cant : 1},
    {name:'Digimon TCG', price : 300, cant : 3},
    {name:'Sceptre', price : 1500, cant : 1}
]
const name = 'perro'
var cat = 'kitty'

const total = products.reduce((acc, cv) =>{
    return arr = (cv.cant * cv.price) + acc
},0)
console.log(total);


function removeProduct(cant, idProducto){
    const prod = products[idProducto]
    prod.cant -= cant;
    if(prod.cant <= 0){
        products.splice(idProducto,1)
        return 'Se eliminó el producto'
    } 
    return 'Se restó el producto'
};

function getTotal(){
    return products.reduce((acc, cv) => {
        return acc = (cv.cant * cv.price) + acc
    }, 0)
};

function addProduct(prod){
    products.push(prod)
    return 'Se agregó un producto'
}


function varTest(){
    var cat = 'Tyr';
    var kain = 'Motomami';
    return cat; 
}

function varTest2(){
    for (var cat = 0; cat <= 9; cat++){
        console.log('catNum', cat);
    }
    console.log('Qué es cat?', cat);
}

function varTest3(){
    for (let cat = 0; cat <= 9; cat++){
        console.log('catNum', cat);
    }
    console.log('Qué es cat?', cat);
}

console.log(window);



const user = {
    username : 'David', 
    age :27,  
    pets: {name: 'Vaquito', 
          name: 'Bizconcho'}
};

function cloneObject(object){
    const clone = {}; // value base === {}
    // 1) {}.key => value que está almacenado en esa llave 
    // 2) {}['key'] => ||
    // Crear o asignar valores a un objeto 
    // 1) {}. = 
    // 2) {}[''] = 
    for (let key in object){           // For in saca las llaves de mi objeto 
        console.log(`Cuál es el valor de key ${key} y el valor: ${object[key]}`);
        if (object[key] != null && typeof object[key] === 'object'){
            clone[key] = cloneObject(object[key])
        } else {
            clone[key] = object[key]
        }
    }
    return clone
}
// Esto va en consola 
//let newUser = cloneObject(user);

// Spread Operator
const newArray = [1,2,3,4,5,6]
const otroArray = [...newArray]

const newUser = {
    ...user, 
    pets:[...user.pets]
}