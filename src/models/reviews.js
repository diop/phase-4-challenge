const database = require('./database/queries')

// Database Processing

module.exports = {
  getThreeNewest: database.getThreeNewestReviews,
  getByUserId: database.getReviewsByUserId,
  getByAlbumId: database.getReviewsByAlbumId,
}
