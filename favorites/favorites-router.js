const router = require("express").Router();

const Favorites = require("./favorites-model.js");

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

// router.get("/song", (req, res) => {
//     const trackName = req.body.trackName;
//     Favorites.findBy(trackName).then
// })

module.exports = router;
