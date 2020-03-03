const seeder = require("knex-csv-seeder")
const path = require("path")
const transformer = require("knex-csv-transformer").transformer
const transfomerHeader = require('knex-csv-transformer').transfomerHeader;

exports.seed = seeder({
  table: 'song_database',
  file: '../csv/SpotifyAudioFeaturesApril2019.csv',
  // recordsPerQuery: 100,
  // encoding: 'utf8' default encoding
  // parser: {
  //   delimiter: ',',
  //   quote: '"',
  //   escape: '\\'
  // }
});

// exports.seed = transformer.seed({
//   table: "song_database",
//   file: path.join(__dirname, 'csv/SpotifyAudioFeaturesApril2019.csv'),
//   transformers: [
//     transfomerHeader('track_id', 'track_id'),
//     transfomerHeader('artist_name', 'artist_name'),
//     transfomerHeader('track_name', 'track_name'),
//     transfomerHeader('acousticness', 'acousticness'),
//     transfomerHeader('danceability', 'danceability'),
//     transfomerHeader('energy', 'energy'),
//     transfomerHeader('instrumentalness', 'instrumentalness'),
//     transfomerHeader('liveness', 'liveness'),
//     transfomerHeader('loudness', 'loudness'),
//     transfomerHeader('speechiness', 'speechiness'),
//     transfomerHeader('tempo', 'tempo'),
//     transfomerHeader('valence', 'valence'),
//     transfomerHeader('duration_ms', 'duration_ms'),
//     transfomerHeader('key', 'key'),
//     transfomerHeader('mode', 'mode'),
//     transfomerHeader('time_signature', 'time_signature'),
//     transfomerHeader('popularity', 'popularity')
//   ]
// })

