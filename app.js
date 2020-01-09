// app.js


const express = require("express");
const bodyParser = require("body-parser");
const hotelsController = require("./controllers/HotelsController");
const usersController = require("./controllers/UsersController");
const reservasController = require("./controllers/ReservasController");
const apikeyController = require("./controllers/ApikeyController");

// db instance connection
require("./config/db");

const app = express();

const port = process.env.PORT || 3301;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// API ENDPOINTS

app
  .route("/co")
  .get(hotelsController.inicio);
app
  .route("/hotel")
  .get(hotelsController.buscarHotel)
  .put(hotelsController.editarHotel)
  .post(hotelsController.crearHotel)
  .delete(hotelsController.eliminarHotel);
app
  .route("/user")
  .get(usersController.buscarUsuario)
  .post(usersController.crearUsuario)
  .delete(usersController.borrarUsuario);
app
  .route("/reserva")
  .post(reservasController.crearReserva);
app
  .route("/user/editar")
  .put(usersController.updateUsuario);
app
  .route("/apikey")
  .get(apikeyController.buscarApiKey)
  .post(apikeyController.createApiKey);
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
