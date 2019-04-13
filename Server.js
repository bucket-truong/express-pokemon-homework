const express = require('express');
const app = express()

const pokemon  = require('./models/pokemon.js')

app.get('/pokemon', (req,res) => {
  res.send(pokemon)
})

const port = 3000;

app.listen(3000, () => {
  console.log('app listening', 3000);
});
module.exports = app;
