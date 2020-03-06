exports.seed = function(knex) {
  // Deletes ALL existing entries
      return knex('favorites').insert([
        {id: 1, song_id: "01GJ1uuXSQycnqSHCk43c7", title: "The Night Is Ours",artist: "ALPHA", user_id: "1"},
        {id: 2, song_id: "2RM4jf1Xa9zPgMGRDiht8O", title: "Big Bank feat. 2 Chainz, Big Sean, Nicki Minaj",artist: "YG", user_id: "1"},
        {id: 3, song_id: "1tHDG53xJNGsItRA3vfVgs", title: "BAND DRUM (feat. A$AP Rocky)",artist: "YG", user_id: "1"},
        
      ]);
};

// exports.seed = function(knex) {
//   // Deletes ALL existing entries
//       return knex('song_database').insert([
//         {artist_name: "LPHA", track_id: "01GJ1uuXSQycnqSHCk43c7", track_name: "The Night Is Ours",acousticness: "(ASOT 874)", danceability: "0", energy: "0.399", instrumentalness: "173790", liveness: "0.571", loudness: "0.0594", speechiness:"5", tempo: "0.277", valence: "-11.42", duration_ms: "0", key:"128.064", mode: "4", time_signature:"0.243",  popularity: "15"}
//       //   {id: 2,  song_id: "1tHDG53xJNGsItRA3vfVgs", title: "BAND DRUM (feat. A$AP Rocky)", artist: "YG", user_id: "1"},
//       //   {id: 3,  song_id:"6Wosx2euFPMT14UXiWudMy", title: "Radio Silence", artist: "R3HAB", user_id: "1" }
//       ]);
// };