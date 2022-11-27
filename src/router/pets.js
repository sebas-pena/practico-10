const { getPets, addPet } = require("../controllers/pets.controller")

const Router = require("express").Router()

Router.get("/", getPets)
Router.post("/", addPet)

module.exports = Router