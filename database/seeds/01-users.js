

exports.seed = function(knex) {
  // Deletes ALL existing entries
      return knex('users').insert([
        {id: 2, username: 'user1', password: "pass1"},
        {id: 3, username: 'user2', password: "pass2"},
        {id: 4, username: 'user3', password: "pass3"}
      ]);
};
