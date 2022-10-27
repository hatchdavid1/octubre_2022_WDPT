const img = new Image(); // Create new <img> element
img.src = 'https://images.unsplash.com/photo-1633628569245-1a939e025ebb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80'; // Set source path

let imagePositionX = 0;
let imagePositionY = 0; 


function drawImage(x,y){
    const theCanvas = document.getElementById('image-canvas');
    const ctx = theCanvas.getContext('2d');
    ctx.drawImage(img, imagePositionX, imagePositionY, 300, 300)
}

drawImage(150, 150)

