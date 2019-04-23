const express = require('express')
const app = express()
const bodyParser = require("body-parser")
const carController = require("./controllers/cars.controller.js")

app.use(bodyParser.urlencoded({ extended: true }))

app.get("/cars", carController.get)

app.post("/cars", carController.send)

app.listen(3000)

console.log("Listening")