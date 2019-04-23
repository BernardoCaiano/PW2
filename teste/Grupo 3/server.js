const express = require('express')
const app = express()
const bodyParser = require("body-parser")
const playerController = require("./controllers/players.controller.js")

app.use(bodyParser.urlencoded({ extended: true }))

app.post("/players", playerController.send)

app.listen(3000)

console.log("Listening")