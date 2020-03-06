

exports.seed = function(knex) {
  // Deletes ALL existing entries
      return knex('users').insert([
        {id: 1, username: 'user1', password: "pass1"},
        {id: 2, username: 'user2', password: "pass2"},
        {id: 3, username: 'user3', password: "pass3"}
      ]);
};


// exports.seed = function(knex) {
//   // Deletes ALL existing entries
//       return knex('favorites').insert([
//         {id: 1, song_id: 2, title: "Big Bank feat. 2 Chainz, Big Sean, Nicki Minaj",artist: "YG", user_id: "1"},
//         {id: 2, song_id: 3, title: "BAND DRUM (feat. A$AP Rocky)", artist: "YG", user_id: "1"},
//         {id: 3, song_id: 4,  title: "Radio Silence", artist: "R3HAB", user_id: "1"},
//       ]);
// };
