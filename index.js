const express = require('express');
const cors = require('cors');
const courses = require('./data/courses.json');
const categories = require('./data/categories.json');
const port = process.env.PORT || 3131;

const app = express();

// Middleware
app.use(cors());
app.use(express.json());




app.get('/', (req, res) => {
    res.send("Charupath API Running")
});

app.get('/courses', (req, res) => {
    res.send(courses);
});

app.get('/categories', (req, res) => {
    res.send(categories);
});


app.get('/category/:id', (req, res) => {
    const id = parseInt(req.params.id);
    if (id === 12) {
        res.send(courses);
    }
    else {
        const cource_category = courses.filter(n => n.id === id);
        res.send(cource_category);
    }

})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})