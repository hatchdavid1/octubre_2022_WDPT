// async function syntax
async function perro(){}

// arrow 
const howl = async () => {}

const directions = [
    "Starting point: Ironhack Miami",
    "↑ Head east on SW 8th St/Carlos Arboleya toward SW 1st Avenue",
    "➔ Turn right onto S Miami Ave",
    "* Chipotle Mexican Grill 891 S Miami Ave, Miami"
];

function obtainDirections(step) {
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            console.log('P',directions[step]);
            if(!directions[step]) reject('No hay más rutas')
            else resolve(directions[step])
        }, Math.floor(Math.random()*3000))
    })
}

const getCoffee = async () => {
    try{
        await obtainDirections(0)
        await obtainDirections(1)
        await obtainDirections(2)
        await obtainDirections(3)
        await obtainDirections(6)
    }catch{
        console.log('error try', error);
    }
}

getCoffee()