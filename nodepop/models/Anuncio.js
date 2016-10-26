"use strict";

var mongoose = require('mongoose');

//Defino el esquema de los anuncios

var anuncioSchema = mongoose.Schema({
    nombre: String,
    venta: Boolean,
    precio: Number,
    foto: String,
    tags:[String]
});



//Para el modelo Anuncio utiliza este esquema

mongoose.model ('Anuncio', anuncioSchema);