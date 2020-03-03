
exports.seed = function(knex) {
  // Deletes ALL existing entries
      return knex('favorites').insert([
        {id: 1, song_id: '2RM4jf1Xa9zPgMGRDiht8O', artist: "YG", title: "Big Bank feat. 2 Chainz, Big Sean, Nicki Minaj", user_id: "1"},
        {id: 2, song_id: '1tHDG53xJNGsItRA3vfVgs', artist: "YG", title: "BAND DRUM (feat. A$AP Rocky)", user_id: "1"},
        {id: 3, song_id: '6Wosx2euFPMT14UXiWudMy', artist: "R3HAB", title: "Radio Silence", user_id: "1"},
      ]);
};
