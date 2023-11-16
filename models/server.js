const express = require("express");
require("dotenv").config();
const cors = require("cors");
const { log } = require("console");
const { socketController } = require("../sockets/controller.socket");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;

    //websockets
    this.server = require('http').createServer(this.app);
    this.io = require('socket.io')(this.server);
    
    this.paths = {};

    // Middlewares
    this.middlewares();

    // Routes
    this.routes();

    // Sockets
    this.sockets()
  }


  middlewares() {
    // CORS
    this.app.use(cors());

    // public directory
    this.app.use(express.static("public"));

  }

  routes() {
    // this.app.use(this.paths.auth, require("../routes/auth.routes"));
  }

  sockets(){
    this.io.on('connection', socketController);

  }

  listen() {
    this.server.listen(this.port, () => {
      console.log(`Running app on port: ${this.port}`);
    });
  }
}
module.exports = Server;
