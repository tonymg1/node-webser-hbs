const express = require('express')
const app = express()
require('dotenv').config();
const hbs = require('hbs');
const port = process.env.PORT
app.set('view engine', 'hbs');

hbs.registerPartials(__dirname + '/views/partials');

//Servir contenido estático
app.use(express.static('public'))


app.get('/', function (req, res) {
  res.render('home', {
    nombre: 'Tony',
    titulo: 'trabajando con hbs'
  })
})

app.get('/generic', function (req, res) {
  res.render('generic', {
    nombre: 'Tony',
    titulo: 'trabajando con hbs'
  })
})

app.get('/elements', function (req, res) {
  res.render('elements', {
    nombre: 'Tony',
    titulo: 'trabajando con hbs'
  })
})


app.listen(port)