const express = require('express')
const Joi = require('joi')
const router = express.Router()

const genere = [
    { id: 1, name: "Horror" },
    { id: 2, name: "Thriller" },
    { id: 3, name: "Adventure" },
    { id: 4, name: "Sc-fi" },
    { id: 5, name: "Comic" },
]

router.get("/", (req, res) => {
    res.send(genere)
})

router.get("/:id", (req, res) => {
    const gene = genere.find(g => g.id == req.params.id)
    if (!gene) res.status(404).send("No genere found with the ID")
    res.send(gene)
})

router.post("/", (req, res) => {
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

router.put("/:id", (req, res) => {
    const gene = genere.find(g => g.id == req.params.id)
    if (!gene) res.status(404).send("No genere found with the ID")
    const index = genere.indexOf(gene)
    const schema = Joi.object({
        name: Joi.string().min(3).required()
    })
    const { error } = schema.validate(req.body)
    if (error) res.status(404).send(error.message)
    genere[index] = {
        id: req.params.id,
        name: req.body.name,
    }
    res.send(genere)
})


router.delete("/:id", (req, res) => {
    const gene = genere.find(g => g.id == req.params.id)
    if (!gene) res.status(404).send("No genere found with the ID")
    const index = genere.indexOf(gene)
    genere.splice(index, 1)
    console.log("DELETE method is called")
    res.send(genere)
})

module.exports = router