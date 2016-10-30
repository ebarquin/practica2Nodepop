"use strict";

var express = require ('express');
var router = express.Router();

var mongoose = require('mongoose');
var Usuario = mongoose.model('Usuario');
var jwt = require('jsonwebtoken');

/*
//Creamos un nuevo login
router.post('/login', function (req, res, next){
    var email = req.body.user;
    var pass = req.body.pass;

  //Localizamos al usuario que tiene ese email

    Usuario.findOne(email).exec(function(err, usuario){
        if (err){
            res.json({success:false, error:"No está en la base de datos"});

        }

        res.json({success:true , anuncios: usuario});
    });

    if(usuario.clave!= pass){
        res.json({success: false, error:"Password Incorrecto"});

    }

    var token = jwt.sign({id : usuario._id}, '123456', {
        expiresIn:'2 days'
    });

    res.json({success:true, token:token});


});

*/
//Podemos crear nuevos usuarios mediante un método post

router.post('/', function(req, res){

    var usuario = new usuario(req.body);

    usuario.save(function(err, usuarioGuardado){
        if (err){
            next (err);
            return;
        }
        res.json({success: true, usuario: usuarioGuardado});
    });

});






module.exports = router;