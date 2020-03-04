exports.seed = function(knex) {
  // Deletes ALL existing entries
      return knex('song_database').insert([
        {artist_name: "ALPHA", track_id: "01GJ1uuXSQycnqSHCk43c7", track_name: "The Night Is Ours (ASOT 874)",acousticness: "0", danceability: "0.399", energy: "173790", instrumentalness: "0.571", liveness: "0.0594", loudness: "5", speechiness:"0.277", tempo: "-11.42", valence: "0", duration_ms: "0.0458", key:"128.064", mode: "4", time_signature:"0.243",  popularity: "15"},
        {artist_name: "YG", track_id: "2RM4jf1Xa9zPgMGRDiht8O", track_name: "Big Bank feat. 2 Chainz, Big Sean",acousticness: "0.00582", danceability: "0.743", energy: "238373", instrumentalness: "0.339", liveness: "0.0", loudness: "1", speechiness:"0.0812", tempo: "-7.67", valence: "1", duration_ms: "0.409", key:"203.92700000000002", mode: "4", time_signature:"0.118",  popularity: "15"}, 
        {artist_name: "YG", track_id: "1tHDG53xJNGsItRA3vfVgs", track_name: "BAND DRUM (feat. A$AP Rocky)",acousticness: "0.0244", danceability: "0.846", energy: "214800", instrumentalness: "0.557", liveness: "0.0", loudness: "8", speechiness:"0.286", tempo: "-7.259", valence: "1", duration_ms: "0.457", key:"159.009", mode: "4", time_signature:"0.371",  popularity: "0"}
    
      ]);
};
