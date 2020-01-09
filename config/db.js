const mongoose = require("mongoose");

const dbURI =
  "mongodb://Juanc:junior170203@hotel-db-shard-00-00-dcpff.mongodb.net:27017,hotel-db-shard-00-01-dcpff.mongodb.net:27017,hotel-db-shard-00-02-dcpff.mongodb.net:27017/test?ssl=true&replicaSet=Hotel-DB-shard-0&authSource=admin&retryWrites=true";

const options = {
  reconnectTries: Number.MAX_VALUE,
  poolSize: 10
};

mongoose.connect(dbURI, options).then(
  () => {
    console.log("Database connection established!");
  },
  err => {
    console.log("Error connecting Database instance due to: ", err);
  }
);

// require any models

require("../models/Task");
