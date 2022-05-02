const express = require('express');
const mongoose = require ('mongoose');
const user = require('./user.controller');
const app = express();
const port = 3000;

mongoose.connect('mongodb+srv://loki:3969@cluster0.are1p.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
app.use(express.json());

// u: loki
// p: 3969

app.get('/', user.list);
app.post('/', user.create);
app.get('/:id', user.get);
app.put('/:id', user.update);
app.patch('/:id', user.update);
app.delete('/:id', user.destroy);

app.get('*', (req, res) => {
    res.status(404).send('Esta página no existe');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});