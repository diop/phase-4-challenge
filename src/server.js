const express = require('express')
const app = express()
const session = require('cookie-session')
const ejs = require('ejs')
const path = require('path')
const bodyParser = require('body-parser')
const home = require('./server/routes/index')
const authentication = require('./server/routes/authentication')
const users = require('./server/routes/users')
const reviews = require('./server/routes/reviews')
const albums = require('./server/routes/albums')

const port = process.env.PORT || 3000

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use(express.static(path.join(__dirname, 'public')))

app.use('/', home)
app.use('/albums', albums)
app.use(authentication)
app.use('/users', users)
app.use('/reviews', reviews)

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}...`)
});
