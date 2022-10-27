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
        this.image.src = 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f137efa8-8b54-461c-aa90-a01efa1b7241/d8jq7ea-237407c6-13b0-4aed-a22e-f712e5d6f0ba.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwic3ViIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsImF1ZCI6WyJ1cm46c2VydmljZTpmaWxlLmRvd25sb2FkIl0sIm9iaiI6W1t7InBhdGgiOiIvZi9mMTM3ZWZhOC04YjU0LTQ2MWMtYWE5MC1hMDFlZmExYjcyNDEvZDhqcTdlYS0yMzc0MDdjNi0xM2IwLTRhZWQtYTIyZS1mNzEyZTVkNmYwYmEucG5nIn1dXX0.n-MehR4m7t6d6gM9_nNQIAWct01-HoZCX9cRIiVHGno'
    }

}

const fondo = new Background()

function update(){
    frames++
    fondo.draw
}