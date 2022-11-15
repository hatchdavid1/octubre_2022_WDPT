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
            else resolve()
        }, Math.floor(Math.random()*3000))
    })
}