const express = require('express')
const app = express()
const bodyParser = require("body-parser")
const userController = require("./controllers/users.controller.js")


app.use(bodyParser.urlencoded({ extended: true }))

app.get("/api/users", userController.get)

app.post("/api/users", userController.registo)

app.listen(3000)

console.log("Listening")