const db = require('../database/dbConfig.js');

module.exports = {
  add,
  find,
  findBy,
  findById,
  findUserFavorites
};

function find() {
  return db('users').select('id', 'username', 'password');
}

function findBy(filter) {
  return db('users').where(filter);
}

async function add(user) {
  return db('users').insert(user, 'id');
}

function findById(id) {
  return db('users')
    .where({ id })
    .first();
}

function findUserFavorites(id) {
  return db("favorites as f")
    .join("users as u", "u.id", "f.user_id")
    .select("f.title", "f.artist", "u.username as requestedBy")
    .where("user_id", id);
}