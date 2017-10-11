const express = require('express')
const router = express.Router()
const morgan = require('morgan')

const index = require('./routes/index')
const albums = require('./routes/albums')
const reviews = require('./routes/reviews')
const users = require('./routes/users')

router.use(index)
// router.use('/albums', albums)

module.exports = router
