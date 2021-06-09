const express = require('express');
// console.log(`express: ${typeof(express)} | constructor:${express.constructor.name}`);

const consign = require('consign');
console.log(`consign: ${typeof(consign)} | constructor:${consign.constructor.name}`);

const app = express();
// console.log(`app: ${typeof(app)} | constructor:${app.constructor.name}`);

// use(), permite configurar alguns recursos do express
// essas configurações vão permitir acessar o body do request
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

consign()
    .include('constantes')
    .then('models')
    .then('controllers')
    .then('routes').into(app);

console.log(app.constantes.db.connection);
console.log(app.constantes.db.connectionParams);

app.listen(3000 /*porta*/, ()=>console.log('Servidor rodando na porta 3000...'));
