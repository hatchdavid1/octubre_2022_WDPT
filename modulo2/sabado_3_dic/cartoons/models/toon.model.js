const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const toonSchema = new Schema(
  {
  name: {
      type:String, 
      unique:true, // custom message
      require:[true, 'Nombre ya fue utilizado']
        }, 
    studio:{
      type:String, 
      require: [true, 'Este campo es necesartio']
        }, 
      catchPhrase:{
      type:String, 
      require: true
        }    
    },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`    
    timestamps: true
  }
);

const Toon = model("Toon", toonSchema);

module.exports = Toon;