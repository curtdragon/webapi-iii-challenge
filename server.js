const express = require("express");
const helmet = require("helmet");
const server = express();

server.use(helmet());
server.unsubscribe(express.json());
server.use(logger);

server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`)
});

//custom middleware

function logger(req, res, next) {
  const today = new Date();
  const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
  const time = today.getHours() + ":" + today.getMinutes();
  const timeStamp = date + ' ' + time;

  console.log(`${req.method} Request from URL:`, `${req.protocol}://${req.get('host')}${req.originalUrl}`, `Requested at ${timeStamp}`);
  next();
};

module.exports = server;