console.log('supercanvas');

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

/*ctx.fillStyle = 'purple';
ctx.fillRect(260, 260, 30, 30);

ctx.fillRect(25, 25, 100, 100);
ctx.clearRect(45, 45, 60, 60);
ctx.strokeRect(50, 50, 50, 50);
*/

ctx.beginPath();
// starting position is x=50, y=50
ctx.moveTo(50, 50);
// draw the line that has final coordinates x=250, y=50
ctx.lineTo(250, 50);
// .stroke() executes the drawing
ctx.stroke();
 
// start a new line from these coordinates: x=250, y=50
ctx.moveTo(250, 50);
// draw the line that has final coordinates x=250, y=100
ctx.lineTo(250, 100);
// .stroke() executes the drawing
ctx.stroke();
 
// close the path
ctx.closePath();

// dibujar un círculo 
ctx.beginPath();
// ctx.arc(x, y, radius, startAngle, endAngle)
ctx.arc(150, 170, 75, 0, Math.PI * 2);
ctx.lineWidth = 20;
ctx.strokeStyle = 'green'; // !
ctx.stroke();
ctx.closePath();
 
ctx.beginPath();
ctx.arc(150, 170, 35, 0, Math.PI * 2);
ctx.fillStyle = 'red'; // !
// fills the inner circle with red color
ctx.fill();
ctx.closePath();

/// STYLING, TEXT AND IMAGES
/*ctx.fillStyle = 'blue';
ctx.fillStyle = '#FAA100';

ctx.strokeStyle = 'red';
ctx.strokeStyle = 'rgb(125, 200, 50)';

ctx.fillStyle = 'blue';
ctx.fillStyle = '#FAA100';

ctx.strokeStyle = 'red';
ctx.strokeStyle = 'rgb(125, 200, 50)';
*/
const canvas2 = document.getElementById("section2");
const ctx2 = canvas2.getContext("2d");


ctx2.fillStyle = "yellow";
ctx2.fillRect(75, 75, 75, 75);

// Set the transparency
ctx2.globalAlpha = 0.4;

ctx2.fillStyle = "blue";
ctx2.fillRect(50, 50, 50, 50);


ctx2.fillStyle = "orange";
ctx2.fillRect(50, 125, 50, 50);

// Set the transparency
ctx2.globalAlpha = 0.8;

ctx2.fillStyle = "green";
ctx2.fillRect(125, 50, 50, 50);

ctx2.fillStyle = "purple";
ctx2.fillRect(125, 125, 50, 50);

ctx2.font = '48px serif'
ctx2.fillText('Hello world', 10, 50);

