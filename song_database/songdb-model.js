const db = require('../database/dbConfig.js');

module.exports = {
  add,
  find,
  findBy,
  findById,
};

function find() {
  return db('song_database')
}

function findBy(filter) {
  return db('song_database')
  .where(filter);
}

async function add(song) {
  return db('song_database').insert(song, 'id');
}

function findById(id) {
  return db('favorite')
    .where({ id })
    .first();
}
