"use strict";

var express = require ('express');
var router = express.Router();

var mongoose = require('mongoose');
var Usuario = mongoose.model('Usuario');

//Podemos crear nuevos usuarios mediante un método post

router.post('/', function(req, res){

    var usuario = new Usuario(req.body);

    usuario.save(function(err, usuarioGuardado){
        if (err){
            next (err);
            return;
        }
        res.json({success: true, usuario: usuarioGuardado});
    });

});



module.exports = router;