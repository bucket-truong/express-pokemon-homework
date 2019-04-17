const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const methodOverride = require('method-override')

const Pokemon  = require('./models/pokemon.js')

app.get('/pokemon', (req,res) => {
  res.render('index.ejs', {pokemon: Pokemon})
});

app.get('/pokemon:id', (req, res) => {
  res.render('show.ejs', {pokemon: Pokemon[req.params.id]})
})

app.get('/pokemon/new', (req, res) => {
  res.render('new.ejs');
})
app.post('/pokemon', (req, res) => {
  Pokemon.push(req.body)
  res.send(Pokemon)
})
app.delete('./pokemon:id', () => {
  pokemon.splice(req.params.id, 1)
  res.redirect('./pokemon')
} )

app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'))
app.use('/css', express.static('css'))

const port = 3000;

app.listen(3000, () => {
  console.log('app listening', 3000);
});
module.exports = app;
