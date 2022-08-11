const express = require('express')
const Joi = require('joi')
const app = express()

app.use(express.json())

const genere = [
    { id: 1, name: "Horror" },
    { id: 2, name: "Thriller" },
    { id: 3, name: "Adventure" },
    { id: 4, name: "Sc-fi" },
    { id: 5, name: "Comic" },
]

app.get("/api/genere", (req, res) => {
    res.send(genere)
})

app.get("/api/genere/:id", (req, res) => {
    const gene = genere.find(g => g.id == req.params.id)
    if (!gene) res.status(404).send("No genere found with the ID")
    res.send(gene)
})

app.post("/api/genere", (req, res) => {
    const schema = Joi.object({
        name: Joi.string().min(3).required()
    })
    const { error } = schema.validate(req.body)
    if (error) res.status(404).send(error.message)
    genere.push({
        id: genere.length + 1,
        name: req.body.name
    })
    res.send(genere)
})

app.put("api/genere/:id", (req, res) => {
    // const gene = genere.find(g => g.id == req.params.id)
    // if (!gene) res.status(404).send("No genere found with the ID")
    // gene.name = req.body.name
    res.send(genere)
})



const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Listening to the port ${PORT}`)
})