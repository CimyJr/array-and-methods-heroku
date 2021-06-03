const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index.ejs'))
  .get('/array', (req, res) => res.render('pages/array.ejs'))
  .get('/methods', (req, res) => res.render('pages/methods.ejs'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
