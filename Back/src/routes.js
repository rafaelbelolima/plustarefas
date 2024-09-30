const express = require('express');
const routes = express.Router();
const usuarios = require("./controllers/usuariosControllers");
const cors = require("cors");

routes.options("*", cors)

//endpints - cadastro

module.exports = routes;