const express = require('express')
const router = express.Router()
const morgan = require('morgan')

const home = require('./routes/home')
const albums = require('./routes/albums')
const reviews = require('./routes/reviews')
const users = require('./routes/users')

router.use(home)

module.exports = router
