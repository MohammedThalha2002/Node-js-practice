// const Joi = require('joi')
// const express = require('express')
// const app = express()

// app.use(express.json())

// const courses = [
//     { id: 1, name: "course1" },
//     { id: 2, name: "course2" },
//     { id: 3, name: "course3" },
// ]

// app.get('/', (req, res) => {
//     res.send('Helo world')
// })

// app.get('/courses', (req, res) => {
//     res.send(courses)
// })

// app.get('/courses/:id', (req, res) => {
//     const course = courses.find((course) => {
//         return course.id === parseInt(req.params.id)
//     })

//     if (!course) res.status(404).send("Course is not found with this id")
//     res.send(course)
// })

// app.post('/postcourses', (req, res) => {
//     const schema = {
//         name : Joi.string().min(3).required()
//     }
//     const result = Joi.valid(req.body, schema)
//     const course = {
//         id : courses.length + 1,
//         name : req.body.name,
//     }
//     console.log(result)
//     res.send("hello")
// })

// const port = process.env.PORT || 3000

// app.listen(port, () => {
//     console.log(`Listening to the port ${port}`)
// })

