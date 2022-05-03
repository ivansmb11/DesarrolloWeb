const mongoose = require('mongoose');
const express = require('express');
const app = express();
app.use(express.json());

mongoose.connect('mongodb+srv://loki:3969@cluster0.are1p.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');

const user = require('./userController');
const res = require('express/lib/response');
const port = 3001;

app.get('/users/', user.list);
app.post('/users/', user.create);
app.get('/users/:id', user.get);
app.put('/users/:id', user.update);
app.patch('/users/:id', user.update);
app.delete('/users/:id', user.delete);

app.use(express.static('app'));

app.get('/', (req, res) => {
  console.log( __dirname )
  res.sendFile(`${ __dirname }/index.html`)
});

app.get('*', (req, res) => {
  res.status(404).send('404 not found');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${ port }`);
});
