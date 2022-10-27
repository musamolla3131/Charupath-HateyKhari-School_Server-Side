const express = require('express');
const app = express();
const cors = require('cors');
const courses = require('./courses.json');
const port = process.env.PORT || 3131;

app.use(cors());

app.get('/', (req, res) => {
    res.send("Hello My Friend")
});

app.get('/courses', (req, res) => {
    res.send(courses);
})

app.get('/courses/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const course = courses.find(course => course.id === id) || {};

    res.send(course);
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})