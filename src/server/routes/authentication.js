const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')

const urlEncodedParser = bodyParser.urlencoded({ extended: false })

router.get('/sign-up', (request, response) => {
  response.render('sign-up', {error: false})
})

router.route('/sign-in')
  .get((request, response) => {
    response.render('sign-in', {error: false})
  })
  .post(urlEncodedParser, (request, response, next) => {
    const recentials = request.body

    user.loginByEmail(credentials, request)
      then((user) => {
        respone.redirect(`users/${user.id}`)
      })
      .catch(error) => {
        console.log('An error occured while signing in user::', error)
        next(new Error('incorect email and/or password'))
      })
  })

})

module.exports = router
