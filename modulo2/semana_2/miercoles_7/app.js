// Import
const bcryptjs = require('bcryptjs')


// Cuántos caracteres random agregar
const saltRound = 8; 

const plainText = 'Dylanysuspalabras'
const plainText2 = 'dylanysuspalabras'

//Generate word
const word = bcryptjs.genSaltSync(saltRound)

// Hash
const hash1 = bcryptjs.hashSync(plainText, word)
const hash2 = bcryptjs.hashSync(plainText2, word)

console.log('has1', hash1);
console.log('has1', hash2);

// Comparar texto vs hash 
const compare1 = bcryptjs.compareSync(plainText, hash1)
const compare2 = bcryptjs.compareSync('guacamole', hash2)

console.log('------------------------------');
console.log('comapre1', compare1);
console.log('comapre2', compare2);