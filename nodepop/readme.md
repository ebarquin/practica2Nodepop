# Instrucciones de uso de NODEPOP

Hemos metido tanto Debug como nodemon (esto último sólo aplicable en desarrollo) en el package.json de modo que iniciaremos la aplicación y la base de datos con el comando 

`npm start`

Por otro lado se ha creado un script llamado installDB.js que borra las tablas de la base de datos y crea unos anuncios y un usuario de ejemplo. Se ha incluido en el package.json, el de modo que podemos ejecutarlo con el comando


`npm run installDB`