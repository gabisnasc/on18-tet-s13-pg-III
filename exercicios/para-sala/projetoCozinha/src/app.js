require ("dotenv").config()

const express = require ("express")
const cors = require ("cors")
const app = express()

const database = require ("./database/mongoConfig")
const rotasdaCozinha = require ("./routes/cozinhaRoutes")

app.use(cors())
app.use(express.json())
app.use("/cozinha", rotasdaCozinha)

database.connect()

module.exports = app;