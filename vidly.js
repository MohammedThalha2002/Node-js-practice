const express = require('express')
const Joi = require('joi')
const app = express()
const genere = require('./Router/genere')

app.use(express.json())
app.use("/api/genere/", genere)


const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Listening to the port ${PORT}`)
})