// 1.- Importar con destructuración 
const {Schema, model} = require('mongoose')

// 2.- Definir los campos del modelo
const tvshowSchema = new Schema({
    // Todos los campos
    //2.1 .- Colocar campos
    name:{
        type:String, 
        unique:true, 
        required:true
    }, 
    season:{
        type:[Number], // type:[1,2,3,4,5] 
        default:[1]
    }, 
    _cast:[ //  <--- Con [] defino que almacenaré muchos ID
        { // _nombreCampo para indicar que esto es una referencia 
        type:Schema.Types.ObjectId, //  <--- con esto definimos una referencia 
        ref:'toon' //  <--- Indicamops a que modelo pertenece el id
    }]
},{
    timestamps:true
})

// 3.- Exportar
module.exports = model('TvShow', tvshowSchema)