//let element = document.getElementById('some-id')


console.log('JS Connected');
let theCatDiv = document.getElementById('cat')

theCatDiv.innerHTML = 'Im a cat'
otherElement.innerHTML = theCatDiv.innerHTML

// Elements attributes and content
// index.js
// ...

theCatDiv.style.backgroundColor = 'red';
theCatDiv.style.border = '2px green solid';
theCatDiv.style.fontSize = '50px';
theCatDiv.style.marginTop = '30px';
theCatDiv.style.paddingBottom = '30px';


// index.js
// ....

let mice = document.getElementsByClassName('mouse');
console.log(mice); // <== HTMLCollection(3) [div.mouse, div.mouse, div.mouse]
