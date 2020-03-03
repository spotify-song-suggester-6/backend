const db = require('../database/dbConfig.js');

module.exports = {
  add,
  find,
  findBy,
  findById,
};

function find() {
  return db('favorites')
}

function findBy(filter) {
  return db('favorites').where(filter);
}

async function add(favorite) {
  return db('favorites').insert(favorite, 'id');
}

function findById(id) {
  return db('favorite')
    .where({ id })
    .first();
}
