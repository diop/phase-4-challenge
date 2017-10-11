// const express = require('express')
// const router = express.Router()
// const bodyParser = require('body-parser')
//
// const albums = require('../../models/albums')
// const reviews = require('../../models/reviews')
//
// const urlEncodedParser = bodyParser.urlencoded({ extended: false })
//
// router.get('/:albumID', (request, response) => {
//   const {albumID} = request.params
//
//   Promise.all([albums.getById(albumID)])
//   .then(([album]) => {
//     response.render('album', {album[0]})
//   })
//   .catch((error) => {
//     response.status(500).render('error', {error: error})
//   })
// })
//
// module.exports = router
