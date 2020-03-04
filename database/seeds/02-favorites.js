exports.seed = function(knex) {
  // Deletes ALL existing entries
      return knex('favorites').insert([
        {id: 1, title: "Big Bank feat. 2 Chainz, Big Sean, Nicki Minaj",artist: "YG", user_id: "1"},
        {id: 2,  title: "BAND DRUM (feat. A$AP Rocky)", artist: "YG", user_id: "1"},
        {id: 3,  title: "Radio Silence", artist: "R3HAB", user_id: "1"},
      ]);
};