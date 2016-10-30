"use strict";

var mongoose = require('mongoose');
var db = mongoose.connection;

db.on('error', console.log.bind(console));


//Lo ejecuta sólo la primera vez cuando se conecta
db.once('open', function(){
    console.log('Conectado a mongodb');


});
//No es necesario exportarlo
mongoose.connect('mongodb://localhost:27017/nodepop');

