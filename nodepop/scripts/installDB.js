'use strict';

//Cargo módulos y el archivo anuncios.json
var mongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/nodepop';
var json = require('../anuncios.json');

//Conexión con la base de datos
mongoClient.connect(url, function(err, db) {

    if (err) {
        return console.log('Error: ', err);
    }

    //Elimino las tablas de la base de datos
    db.collection('anuncios').deleteMany({}, function(err) {

        if (err) {
            return console.log('Error', err);
        }

        console.log('Anuncios Borrados');

    });


    //Cargo los anuncios del archivo anuncios.json
    db.collection('anuncios').insertMany(json.anuncios, function(err, registros) {

        if (err) {
            return console.log('Error', err);
        }

        console.log('Anuncios Agregados ', registros.ops);

    });


});
