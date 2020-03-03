
exports.up = function(knex) {

  return knex.schema
  .createTable("users", tbl => {
      tbl.increments("id");
      tbl.string("username", 128);
      tbl.string("password", 128);
  })
  .createTable("favorites", tbl => {
      tbl.integer("song_id").primary();
      tbl.string("title", 256);
      tbl.integer("user_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("users")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
      
  })
  .createTable("song_database", tbl => {
      tbl.integer("track_id")
      .primary()
      .unsigned()
      .notNullable()
      .references("song_id")
      .inTable("favorites")
      .onUpdate("CASCADE")
      .onDelete("CASCADE")
      tbl.string("artist_name", 256)
      tbl.string("track_name", 256)
      tbl.decimal("acousticness")
      tbl.decimal("danceability", null)
      tbl.decimal("energy", null)
      tbl.decimal("instrumentalness", null)
      tbl.decimal("liveness", null)
      tbl.decimal("loudness", null)
      tbl.decimal("speechiness", null)
      tbl.decimal("tempo", null)
      tbl.decimal("valence", null)
      tbl.integer("duration_ms")
      tbl.integer("key")
      tbl.integer("mode")
      tbl.integer("time_signature")
      tbl.integer("popularity")
  })
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists("users")
  .dropTableIfExists("favorites")
  .dropTableIfExists("song_database")
};
