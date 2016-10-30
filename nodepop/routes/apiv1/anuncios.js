"use strict";

var express = require ('express');
var router = express.Router();

var mongoose = require('mongoose');
var Anuncio = mongoose.model('Anuncio');



//Peticiones get

router.get('/', function (req, res, next) {
    //parametros de la query string
    var tags = req.query.tags;
    var venta = req.query.venta;
    var nombre = req.query.nombre;
    var limit = parseInt(req.query.limit)|| null;
    var sort = req.query.sort || null;



    var filter = {};

    //comprobamos los datos de la query que han introducido

    if (typeof tags === 'string'){
        filter.tags = tags;
    }

    if (typeof venta !== 'undefined'){
        filter.venta = venta;
    }

    if (nombre){
        filter.nombre = new RegExp('^' + req.query.nombre, "i");
    }







    Anuncio.find(filter).limit(limit).sort(sort).exec(function(err, anuncios){
       if (err){
           next(err);
           return;
       }
       res.json({success:true , anuncios: anuncios});
    });


});




module.exports = router;