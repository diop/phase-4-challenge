const database = require('./database/queries')

// Database Processing

module.exports = {
  getAll: database.getAlbums,
  getById: database.getAlbumByID
}
