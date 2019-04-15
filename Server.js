const express = require('express');
const app = express()

const Pokemon  = require('./models/pokemon.js')

app.get('/pokemon', (req,res) => {
  res.render('index.ejs', {pokemon: Pokemon})
});

app.get('/index/:id', (req, res) => {
  res.render('show.ejs', {pokemon: Pokemon[req.params.id]})
})

const port = 3000;

app.listen(3000, () => {
  console.log('app listening', 3000);
});
module.exports = app;
