"use strict";

var express = require ('express');
var router = express.Router();

var mongoose = require('mongoose');
var Usuario = mongoose.model('Usuario');

var usuario1 = new Usuario({nombre: 'Eugenio', email: 'info@info.net', clave:'1234'});

usuario1.save(function(err, usuarioGuardado){
    console.log(err, usuarioGuardado);
});


module.exports = router;