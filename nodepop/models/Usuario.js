"use strict";

var mongoose = require('mongoose');

//defino el esquema de los usuarios

var usuarioSchema = mongoose.Schema({
    nombre: String,
    email: String,
    clave: String
});

//Para el modelo Usuarios utiliza este esquema

mongoose.model ('Usuario', usuarioSchema);