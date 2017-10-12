const database = require('./connection')

const queries = {

  getAlbums: () => {
    return database.any(`SELECT * FROM albums`)
  },

  getAlbumByID: (albumID) => {
    return database.any(`SELECT * FROM albums WHERE id = $1`, [albumID])
  },

  createUser: (name, email, password) => {
    return database.one(`INSERT INTO users (name, email, password)
      VALUES ($1, $2, $3) RETURNING *`, [name, email, password])
  },

  getUserById: (userID) => {
    return database.one('SELECT id, name, email, date_joined FROM users WHERE id = $1', [userID])
  },

  getUserByEmail: (email) => {
    return database.one('SELECT * FROM users WHERE email = $1', [email])
  },

  getThreeNewestReviews: () => {
    return database.any(`SELECT reviews.*, albums.title AS album_title, users.name AS user_name
      FROM reviews
      INNER JOIN albums ON reviews.album_id = albums.id
      INNER JOIN users ON reviews.user_id = users.id
      ORDER BY reviews.date_created DESC
      LIMIT 3`)
  },

  createReview: (content, album_id, user_id) => {
    return database.none(`INSERT INTO reviews (content, album_id, user_id) VALUES ($1, $2, $3)`, [content, album_id, user_id])
  },

  getReviewsByUserId: (userID) => {
    return database.any(`SELECT reviews.*, albums.title AS album_title, users.name AS user_name
      FROM reviews
      INNER JOIN users ON reviews.user_id = users.id
      INNER JOIN albums ON reviews.album_id = albums.id
      WHERE reviews.user_id = $1
      ORDER BY reviews.date_created DESC`, [userID])
  },

  getReviewsByAlbumId: (albumId) => {
    return database.any(`SELECT * FROM reviews WHERE album_id = $1`, [albumId])
  },

  getReviewsByCityId: (albumID) => {
    return database.any(`SELECT reviews.id, reviews.content, reviews.album_id, reviews.user_id, reviews.date_created, albums.title AS album_title, users.name AS user_name FROM reviews
      INNER JOIN users ON reviews.user_id = users.id
      INNER JOIN albums ON reviews.album_id = albums.id
      WHERE reviews.album_id = $1
      ORDER BY reviews.date_created DESC`, [albumID])
  },

  deleteByReviewID: (reviewID) => {
    return database.none('DELETE FROM reviews WHERE id = $1', [reviewID]);
  }

}

module.exports = queries
