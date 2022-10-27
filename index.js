const express = require('express');
const app = express();
const cors = require('cors');
const phones = require('./phones.json');
const port = process.env.PORT || 3131;

app.use(cors());

app.get('/', (req, res) => {
    res.send("Hello My Friend")
});

app.get('/phones', (req, res) => {
    res.send(phones);
})

app.get('/phones/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const phone = phones.find(phone => phone.id === id) || {};

    res.send(phone);
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})