// EXERCÍCIO 02
// SERVIDOR DE PÁGINAS HTML
// Faça um servidor de páginas com pelo menos 3 
// páginas HTML diferentes
// (uma delas, sendo respondida pela rota principal '/').
// Faça também o redirecionamento para uma paǵina 
// de erro, quando a rota não
// corresponder a nenhuma página existente.
// As páginas HTML devem ser lidas pelo módulo File 
// System.
// Dentro do diretorio 'exercicios', criar uma pasta 
// '02-exercicio' e incluir
// alí a resolução do exercício. Fazer commit.

const http = require('http');
const fs = require('fs');

const server = http.createServer(
    (request, response) => {
        let arquivo = '';

        if (request.url === '/') {
            arquivo = 'index.html'
        } else if (request.url === '/hobbies'){
            arquivo = 'hobbies.html'
        } else if (request.url === '/contato'){
            arquivo = 'contato.html'
        } else {
            arquivo = 'erro.html'
        }

        if (fs.existsSync(arquivo)) {
            fs.readFile(arquivo, 
                (erro, dados) => {
                    if (erro) {
                        throw erro;
                    } else {
                        response.writeHead(200, {'Content-Type': 'text/html'});
                        response.write(dados);
                        response.end();
                    }
                }
            );    
        } else {
            response.writeHead(500, {'Content-Type': 'text/html'});
            response.write(`Arquivo não localizado:  ${arquivo}`);
            response.end();
        }
    }
);

server.listen(3000, ()=> {console.log("Servidor está rodando a porta 3000")});