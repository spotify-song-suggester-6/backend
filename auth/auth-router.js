const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken"); 

const Users = require("../users/users-model");
const { jwtSecret } = require("../config/secrets")

router.post('/register', (req, res) => {
    // res.send({message: "You're hitting the registration endpoint"})

    let user = req.body;
    const hash = bcrypt.hashSync(user.password, 10);
    user.password = hash;

    Users.add(user)
    .then(user => {
        res.status(201).json(user);
    })
    .catch(err => {
        res.status(500).json(err.message)
    })
})

  router.post("/login", (req, res) => {
    let { username, password } = req.body;
  
    Users.findBy({ username })
      .first()
      .then(user => {
        if (user && bcrypt.compareSync(password, user.password)) {
          const token = generateToken(user); // get a token
  
          res.status(200).json({
            message: `Welcome ${user.username}!`,
            token, // send the token
          });
        } else {
          res.status(401).json({ message: "Invalid Credentials" });
        }
      })
      .catch(error => {
        console.log("ERROR: ", error.message);
        res.status(500).json(error.message);
      });
  });

  function generateToken(user) {
    const payload = {
        username: user.username
    }
    
    const secret = "keep it secret, keep it safe"
    
    const options = {
        expiresIn: "1h"
    
    }
    
        return jwt.sign(payload, secret, options)
    }
    

  module.exports = router;
