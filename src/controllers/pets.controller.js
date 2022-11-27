const petsModel = require("../models/pets")

const getPets = (req, res) => {
  petsModel.find().then(pets => res.json(pets))
}

const addPet = (req, res) => {
  console.log(req.body)
  petsModel.create(req.body).then(doc => {
    res.status(201).json(doc)
  }).catch(e => {
    res.status(500).send("INTERNAL SERVER ERROR")
  })
}

module.exports = {
  getPets,
  addPet
}