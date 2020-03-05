const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

const authRouter = require("../auth/auth-router.js");
const usersRouter = require("../users/users-router.js");
const favoritesRouter = require("../favorites/favorites-router.js");
const restricted = require("../auth/restricted-middleware.js");

server.use("/api/auth", authRouter);
server.use("/api/users", usersRouter);
server.use("/api/favorites", favoritesRouter);

server.get("/", (req, res) => {
    res.send("Server is alive");
})

module.exports = server;