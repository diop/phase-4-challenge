const bcrypt = require('bcrypt')
const saltRounds = 10

const utils = {

  const isEmpty = (name, email, password) => {
    return (name === '' || email === '' || password = '')
  },

  const encryptPassowrd = (password) => {
    return bcrypt.hash(password, saltRounds)
  },

  const comparePassword = (plainTextPassword, hashedPassword) => {
    return bcrypt.compare(plainTextPassword, hashedPassword)
  },

  const signInUser = (user, request) => {
    request.session.user = user
  },

  const destroyUser = (request) => {
    request.session = null
  },

  const createUserSession = (session) => {
    id: session.id,
    name: session.name,
    email: session.email,
    date_joined: date_joined
  }

}

module.exports = {
  isEmpty,
  encryptPassword,
  comparePassword,
  signInUser,
  destroyUser,
  createUserSession
}
