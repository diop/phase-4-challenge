const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const albums = require('../../models/albums')
const reviews = require('../../models/reviews')

const urlEncodedParser = bodyParser.urlencoded({ extended: false })

router.get('/:albumID', (request, response) => {
 const {albumID} = request.params
 const options = [ albums.getById(albumID), reviews.getByAlbumId(albumID) ]

 Promise.all(options)
   .then(([album, reviews]) => {
     console.log('albums =====>', album, reviews)
     response.render('album', { album: album[0], reviews })
   })
   .catch(error => response.status(500).render('error', {error: error}))
})

module.exports = router
