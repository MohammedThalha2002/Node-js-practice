const Joi = require('joi')
const express = require('express')
const app = express()

const courses = [
    { id: 1, name: "course1" },
    { id: 2, name: "course2" },
    { id: 3, name: "course3" },
]

app.get('/', (req, res) => {
    res.send('Helo world')
})

app.get('/courses', (req, res) => {
    res.send(courses)
})

app.get('/courses/:id', (req, res) => {
    const course = courses.find((course) => {
        return course.id === parseInt(req.params.id)
    })

    if (!course) res.status(404).send("Course is not found with this id")
    res.send(course)
})

app.post('/courses', (req, res) => {
    // const schema = {
    //     name: Joi.string().min(3).required()
    // }
    // const result = Joi.valid(req.body, schema)
    console.log(req.body)
    res.send(req.body)
})

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Listening to the port ${port}`)
})