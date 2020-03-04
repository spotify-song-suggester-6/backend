
exports.up = function(knex) {

  return knex.schema
  .createTable("users", tbl => {
      tbl.increments("id");
      tbl.string("username", 128);
      tbl.string("password", 128);
  })
  .createTable("song_database", tbl => {
     
      tbl.string("artist_name", 256)
      tbl.string("track_id").primary();
      tbl.string("track_name", 256)
      tbl.string("acousticness")
      tbl.string("danceability")
      tbl.string("energy")
      tbl.string("instrumentalness")
      tbl.string("liveness")
      tbl.string("loudness")
      tbl.string("speechiness")
      tbl.string("tempo")
      tbl.string("valence")
      tbl.string("duration_ms")
      tbl.string("key")
      tbl.string("mode")
      tbl.string("time_signature")
      tbl.string("popularity")
  })
  .createTable("favorites", tbl => {
    tbl.increments("id").primary()
    tbl.string("title", 256);
    tbl.string("artist", 256)
    tbl.integer("user_id")
    .unsigned()
    .notNullable()
    .references("id")
    .inTable("users")
    .onUpdate("CASCADE")
    .onDelete("CASCADE");
    tbl.string("song_id")
    .unsigned()
    .references("track_id")
    .inTable("song_database")
    .onUpdate("CASCADE")
    .onDelete("CASCADE");
})
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists("favorites")
  .dropTableIfExists("song_database")
  .dropTableIfExists("users")
  
  
};

// tbl.string("song_id")
//     .unsigned()
//     .notNullable()
//     .references("id")
//     .inTable("song_database")
//     .onUpdate("CASCADE")
//     .onDelete("CASCADE");