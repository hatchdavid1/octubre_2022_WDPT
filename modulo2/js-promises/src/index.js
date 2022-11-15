function func2(){
    console.log('Pago la cena');
}

function func1 (cb){
    console.log('Vamos a cenar');
    //cb()
}

func1()
func2()

/**
 * Cómo se ejecuta el código 
 * Se imprime func1
 *  Se imprime func2
 */
func1(func2)
/** Cómo se escriben las callbacks
 * func1(func2) ----> Good 
 * func1(func2()) ----> Bad
 */

const directions = [
    "Starting point: Ironhack Miami",
    "↑ Head east on SW 8th St/Carlos Arboleya toward SW 1st Avenue",
    "➔ Turn right onto S Miami Ave",
    "* Chipotle Mexican Grill 891 S Miami Ave, Miami"
];

function getDirections(step, callback, errorCallback) {
    setTimeout(() => {
        console.log(directions[step]);
        if (!directions[step]) errorCallback('No hay ruta')
        else callback()
    }, Math.floor(Math.random() * 1000))
}

getDirections(0, ()=>{
    getDirections(1, ()=>{
        getDirections(2, ()=>{
            getDirections(3, ()=>{
                getDirections(4, ()=>{}, (error)=>{console.error(error)})
            })
        })
    })

}, (error)=>{console.error(error)})