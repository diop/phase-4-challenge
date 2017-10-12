const database = require('./database/queries')
const { encryptPassword, comparePassword, signinUser } = require('./utils')

const users = {

  createNewUser: (user) => {
    const {name, email, password} = user

    return encryptPassword(password)
      .then((hashedPassword) => {return database.createUser(name, email, hashedPassword)})
      .then((user) => {
        const {id, name, email, date_joined} = user
        return {id, name, email, date_joined}
      })
  },

  signInByEmail: (user, request) => {
    const {email, password: plainTextPassword} = user
    let verifiedUser

    return database.getUserByEmail(email)
      .then((user) => {
        const {password: hashedPassword} = user
        verifiedUser = {
          id: user.id,
          name: user.name,
          email: user.email,
          date_joined: user.date_joined
        }
        return comparePassword(plainTextPassword, hashedPassword)
      })
      .then((match) => {
        if (match){
          signinUser(verifiedUser)
          return verifiedUser
        }
        else throw Error('invalid email and/or password')
      })
  }

}

module.exports = users
