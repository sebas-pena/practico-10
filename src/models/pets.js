const { Schema, model } = require("mongoose")

const petSchema = new Schema({
  nombre: {
    type: String,
    required: true
  },
  edad: {
    type: Number,
    required: true
  },
  tipo: {
    type: String,
    required: true
  },
  caracteristicas: {
    type: String,
    required: true
  },
})

module.exports = model("Pet", petSchema)