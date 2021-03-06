const express = require('express')
const router = express.Router()
const albums = require('../../models/albums')
const reviews = require('../../models/reviews')

router.get('/', (request, response) => {
  const options = [albums.getAll(), reviews.getThreeNewest()]
  Promise.all(options)
    .then( ([albums, reviews]) => {
      console.log('succesful')
      response.render('index', {albums, reviews})
    })
    .catch((err) => {
      console.log('error')
      response.status(500).render('error', { error: err})
    })
})

module.exports = router
