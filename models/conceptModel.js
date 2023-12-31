const { Schema, model } = require("mongoose");

const conceptSchema = new Schema({
  title: {
    type : String,
    required: [true, "El titulo es obligatorio"],
    trim: true,
    unique: true,
    minlength: 2,
    maxlength: 100,
  },
  description : {
    type : String,
    required: [true, "La descripcion es obligatoria"],
    trim: true,
    minlength: 100,
    maxlength: 1000,
  },
  examples : {
    type : [String]
  },
  tags : {
    type : [String]
  },
  create_date: {
    type: Date,
    default: Date.now 
},
  last_update: {
    type: Date,
    default: Date.now 
}
});


const Concept = model("Concept", conceptSchema)

module.exports = Concept;