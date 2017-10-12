const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const User = require('../../models/users')
const reviews = require('../../models/reviews')

const urlEncodedParser = bodyParser.urlencoded({ extended: false })

router.get('/sign-up', (request, response) => {
  response.render('sign-up', {error: false})
})

router.route('/sign-in')
  .get((request, response) => {
    response.render('sign-in', {error: false})
  })
  .post(urlEncodedParser, (request, response, next) => {
    const credentials = request.body

    User.signInByEmail(credentials, request)
      .then((user) => {
        response.redirect(`users/${user.id}`)
      })
      .catch(error => {
        console.log('An error occured while signing in user::', error)
        next(new Error('incorect email and/or password'))
      })
  })

module.exports = router
