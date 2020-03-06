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
const songDBRouter = require("../song_database/songdb-router")
const restricted = require("../auth/restricted-middleware.js");

server.use("/api/auth", authRouter);
server.use("/api/users", usersRouter);
server.use("/api/favorites", favoritesRouter);
server.use("/api/songs", songDBRouter);

server.get("/", (req, res) => {
    res.send("Server is alive");
})

module.exports = server;