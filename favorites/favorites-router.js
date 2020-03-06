const router = require("express").Router();

const Favorites = require("./favorites-model.js");
const songDB = require("../song_database/songdb-model");
router.get("/", (req, res) => {
  Favorites.find()
    .then(favorites => {
    
      res.json(favorites);
    })
    .catch(err =>{
        console.log(err);
        res.send(err.message)
    });
});

router.post("/", (req, res) => {
    const trackName = req.body.trackName;
    const userId = req.body.userId
    songDB.findBy({
        track_name: trackName
    }).then(song => {
        const favorite = {
            song_id: song[0].track_id,
            title: song[0].track_name,
            artist: song[0].artist_name,
            user_id: userId
        }
        Favorites.add(favorite)
        .then(favorite => {
            res.status(201).json(favorite)
        })
        .catch(err => {
            res.status(500).json({error: err.message})
        })
    }).catch(err =>{
        
        res.send(err.message)
    });
});

module.exports = router;
