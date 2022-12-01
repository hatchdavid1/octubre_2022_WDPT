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

/**Callback HEll getDirections(0, ()=>{
    getDirections(1, ()=>{
        getDirections(2, ()=>{
            getDirections(3, ()=>{
                getDirections(4, ()=>{}, (error)=>{console.error(error)})
            })
        })
    })
}, (error)=>{console.error(error)})  */

function obtainDirections(step) {
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            console.log('P',directions[step]);
            if(!directions[step]) reject('No hay más rutas')
            else resolve()
        }, Math.floor(Math.random()*3000))
    })
}

/* obtainDirections(0).then(()=>{
    console.log('Dentro del then')
    return obtainDirections(1)
}).then(()=>
    obtainDirections(2)
).then(()=>
    obtainDirections(3)
).catch((error)=>{
    console.warn(error);
}).finally(()=>{
    console.log('Soy el final');
})
*/

const p1 = new Promise((resolve, reject) => {
    setTimeout(()=>resolve('foo'), 10000)
})
const p2 = new Promise((resolve, reject) => {
    setTimeout(()=>resolve(12345), 2000)
})
const p3 = new Promise((resolve, reject) => {
    setTimeout(()=>resolve({name:'Jose'}), 4000)
})
const p4 = new Promise((resolve, reject) => {
    setTimeout(()=>resolve('Cualquier cosa'), 1000)
})


p1.then((response)=>{
    console.log('la respuesta', response);
}).catch(()=>{})
p2.then((response)=>{
    console.log('la respuesta', response);
}).catch(()=>{})
p3.then((response)=>{
    console.log('la respuesta', response);
}).catch(()=>{})
p4.then((response)=>{
    console.log('la respuesta', response);
}).catch(()=>{})

Promise.all([p1,p2,p3,p4])
.then((res)=>{console.log('la res', res);})
.catch(()=>{})
//.finally(()=>{})