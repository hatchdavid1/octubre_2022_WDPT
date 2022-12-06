// 1.- Importar 
const {Schema, model} = require('mongoose')


// 2.- Definir los campos del modelo 
const taskSchema = new Schema({
    title:{
        require:[true, 'Coloca un título para la tarea'] , //  <= custom message
        type: String, 
        minLength:2
    }, 
    description:{
        type:String, 
        minLength:2,
        require:[true, 'Coloca una descripción para la tarea'] , //  <= custom message
    }, 
    isCompleted:{
        type:Boolean, 
        default:false
    }
    // _owner:{}
}, {timestamps:true})
//? timestamp => para colocar la fecha de creación y actualización dependiendo el server

// 3.-Exportar
module.exports = model('Task', taskSchema)
