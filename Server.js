const express = require('express');
const app = express()

const pokemon  = require('./models/pokemon.js')



app.listen(3000, () => {
  console.log('app listening', 3000);
});
