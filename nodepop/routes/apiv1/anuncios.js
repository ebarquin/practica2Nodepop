"use strict";

var express = require ('express');
var router = express.Router();

var mongoose = require('mongoose');
var Anuncio = mongoose.model('Anuncio');



//Peticiones get

router.get('/', function (req, res, next) {
    var venta = req.query.venta;
    var sort = req.query.sort || null;

    var filter = {};

    if (typeof venta !== 'undefined'){
        filter.venta = venta;
    }


    Anuncio.find(filter).sort(sort).tags(arr).exec(function(err, anuncios){
       if (err){
           next(err);
           return;
       }
       res.json({success:true , anuncios: anuncios});
    });
});




module.exports = router;