const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const routes = require('./server/routes')
const path = require('path')
const port = process.env.PORT || 3000

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use(express.static(path.join(__dirname, 'public')))

app.use(routes)

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}...`)
});
