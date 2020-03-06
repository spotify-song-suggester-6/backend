const router = require("express").Router();

const Users = require("./users-model.js");

router.get("/", (req, res) => {
  Users.find()
    .then(users => {
    
      res.json(users);
    })
    .catch(err =>{
        console.log(err);
        res.send(err.message)
    });
});

router.get("/:id/favorites", (req, res ) => {
  Users.findUserFavorites(req.params.id)
  .then(favorites => {
    res.status(200).json(favorites)
  })
  .catch(err => {
    console.log("error", err)
    res.status(500).json({ error: err });
  })
})

module.exports = router;
