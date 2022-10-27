const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
let frames = 0; 

class Background{
    // la masa inicial de nuestro paster
    constructor(){
        this.x = 0; 
        this.y = 0; 
        this.width = canvas.width;
        this.height = canvas.height;
        this.image = new Image();
        this.image.src = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f137efa8-8b54-461c-aa90-a01efa1b7241/d8jq7ea-237407c6-13b0-4aed-a22e-f712e5d6f0ba.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwic3ViIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsImF1ZCI6WyJ1cm46c2VydmljZTpmaWxlLmRvd25sb2FkIl0sIm9iaiI6W1t7InBhdGgiOiIvZi9mMTM3ZWZhOC04YjU0LTQ2MWMtYWE5MC1hMDFlZmExYjcyNDEvZDhqcTdlYS0yMzc0MDdjNi0xM2IwLTRhZWQtYTIyZS1mNzEyZTVkNmYwYmEucG5nIn1dXX0.n-MehR4m7t6d6gM9_nNQIAWct01-HoZCX9cRIiVHGno"
    }
    draw(){
        this.x --;
        if(this.x  < -canvas.width) this.x=0;
        // Dibujar la imagen en fijo 
        ctx.drawImage(this.image, this.x, this.y,this.width,  this.height)
        ctx.drawImage(this.image, this.x+ this.width, this.y, this.width, this.height)
    }
}

class Mario{
    constructor(x,y,width,height){
        this.x = x; 
        this.y = y;
        this.width = width; 
        this.height = height;
        this.image1 = new Image()
        this.image1.src = '';
        this.image2 = new Image()
        this.image2.src = '';
        this.image = this.image1
    }

    draw(){
        if (frames %10 ===0){
            this.image = this.image === this.image1 ? this.image2: this.image1
        }
        ctx.drawImage(this.image1,this.x, this.y, this.width, this.height )
    }
}

const mario = new Mario(20, 20, 300, 300)
const fondo = new Background()

function update(){
    //console.log('si pasamos al update');
    frames++
    // limpieza del canvas
    ctx.clearRect(0,0,canvas.width, canvas.height)
    fondo.draw()
    mario.draw()
    // Esto es el loop de la app 
    if (requestID){
        requestID = requestAnimationFrame(update)
    }
    
}

function start(){
    requestID = requestAnimationFrame(update)
}

function endGame(){
    requestID = undefined;
}
start()
update()

