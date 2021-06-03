const express = require('express');
// console.log(`express: ${typeof(express)} | constructor: ${express.constructor.name}`);

const app = express();
// console.log(`app: ${typeof(app)} | constructor: ${app.constructor.name}`);

//essas configurações vão permitir acessar o body do request
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.listen(3000/*porta*/, () => console.log('Servidor rodando na porta 3000...'));

//criando uma rota

//get, define a rota e a função que deve ser executada...
app.get(
    '/', //é a URL da rota
    (request, response) => {
        console.log('Rota principal chamada...');
        response.send('Servidor rodando, está tudo ok');
    }
);

//criando rota para cadastrar rastreador
app.post(
    '/rastreador',
    (request, response) => {
        console.log('Rota /rastreador chamada...');
        console.log(`request.body: ${request.body}`);
        console.log(request.body);
        response.send('OK');
    }
);