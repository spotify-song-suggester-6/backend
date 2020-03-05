const router = require("express").Router();

const songDB = require("./songdb-model.js");

router.get("/", (req, res) => {
    songDB.find()
      .then(songs => {
      
        res.json(songs);
      })
      .catch(err =>{
          console.log(err);
          res.send(err.message)
      });
  });

router.post("/", (req, res) => {
    const trackName = req.body.trackName
    songDB.findBy({
        track_name: trackName
    })
      .then(song => {
        res.status(200).json(song);
      })
      .catch(err =>{
          console.log(err);
          res.send(err.message)
      });
  });

  
module.exports = router;
