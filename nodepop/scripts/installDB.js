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

    //Elimino la tabla de anuncios de la  base de datos
    db.collection('anuncios').deleteMany({}, function(err) {

        if(err){
            console.log('Error', err);
            return;
        }
        console.log('Anuncios Borrados');

    });

    //Elimino la tabla de usuarios de la base de datos
    db.collection('usuarios').deleteMany({}, function(err){

        if(err){
            console.log('Error', err);
            return;
        }
        console.log('Usuarios Borrados');

    });


    //Cargo los anuncios del archivo anuncios.json
    db.collection('anuncios').insertMany(json.anuncios, function(err, registros) {

        if(err){
            console.log('Error', err);
            return;
        }

        console.log('Anuncios Agregados ', registros.ops);

    });

    //Cargo los anuncios del archivo anuncios.json
    db.collection('usuarios').insertMany(json.usuarios, function(err, registros) {

        if(err){
            console.log('Error', err);
            return;
        }

        console.log('Usuarios Agregados ', registros.ops);

    });



});
