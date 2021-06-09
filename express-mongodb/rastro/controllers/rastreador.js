const mongoose = require('mongoose');

module.exports = (app) => {

    const RastreadorController = {

        // método cadastrar() vai atender a rota POST /rastreador
        cadastrar(request, response) {

            console.log('Rota /rastreador chamada...');
            console.log(`request.body: ${request.body}`);
            console.log(request.body);
    
            // validar o request.body...
    
            const Rastreador = app.models.rastreador;

            // criar o documento na coleção 'rastreadores'            
            const rastreador = new Rastreador(request.body);
            // console.log(`rastreador: ${rastreador} | constructor: ${rastreador.constructor.name}`);
            // console.log(rastreador);
            
            mongoose.connect(
                'mongodb://localhost:27017/rastro-dev', // string de conexão
                {
                    useNewUrlParser: true,
                    useUnifiedTopology: true,
                    useCreateIndex: true
                }
            )
            .then(
                (resultado) => {
    
                    // cadastrando o documento, com o create() a partir do tipo Rastreador
                    const resultadoCreate = Rastreador.create(rastreador)
                        .then((resultado) => {
                            console.log(`resultado do then: ${resultado} | constructor: ${resultado.constructor.name}`);
                            console.log(resultado);
                            console.log(`Rastreador ${rastreador.codigoRastreador} cadastrado com sucesso.`);
                            mongoose.disconnect();
                            response.status(200).send(resultado);
                        })
                        .catch((erro) => {
                            console.log(`erro do create: ${erro} | constructor: ${erro.constructor.name}`);
                            console.log(erro);
                            console.log(`Erro ao cadastrar o Rastreador: ${erro}`);
                            mongoose.disconnect();
                            response.status(500).send(`Erro ao cadastrar o Rastreador: ${erro}`);
                        });
                
                }
            ).catch(
                (erro) => {
                    console.log(`erro do connection: ${erro} | constructor: ${erro.constructor.name}`);
                    console.log(erro);
                    console.log(`Erro ao conectar no banco MongoDB: ${erro}`);
                    response.status(500).send(`Erro ao conectar no banco MongoDB: ${erro}`);
                }
            );
        },
        //método alterar cadastro do rastreador
        alterar(request, response) {

            console.log('Rota PUT /rastreador chamada...');
            console.log(`request.body: ${request.body}`);
            console.log(request.body);

            const Rastreador = app.models.rastreador;

            mongoose.connect(
                'mongodb://localhost:27017/rastro-dev', // string de conexão
                {
                    useNewUrlParser: true,
                    useUnifiedTopology: true,
                    useCreateIndex: true
                }
            )
            .then(() => {
                // a função updateOne() alterar um documento da coleção
                Rastreador.updateOne(
                    // objeto com o critério de busca do documento
                    {codigoRastreador: request.body.codigoRastreador}, 
                    // objeto com os dados que devem ser atualizados
                    {
                        $set: {
                            placaVeiculo: request.body.placaVeiculo,
                            cpfCliente: request.body.cpfCliente
                        }
                    }
                )
                .then((resultado) => {
                    console.log(`resultado do updateOne:`);
                    console.log(resultado);

                    if (resultado.nModified > 0) {
                        mongoose.disconnect();
                        response.status(200).send('Rastreador alterado com sucesso.');    
                    } else {
                        mongoose.disconnect();
                        response.status(404).send('Rastreador não localizado no cadastro.');    
                    }

                })
                .catch((erro) => {
                    console.log(`Erro ao alterar o Rastreador: ${erro}`);
                    console.log(erro);
                    mongoose.disconnect();
                    response.status(500).send(`Erro ao alterar o Rastreador: ${erro}`);
                });
            })
            .catch((erro) => {
                console.log(`erro do connection: ${erro} | constructor: ${erro.constructor.name}`);
                console.log(erro);
                console.log(`Erro ao conectar no banco MongoDB: ${erro}`);
                response.status(500).send(`Erro ao conectar no banco MongoDB: ${erro}`);
            });
        },
        //método excluir cadastro do rastreador
        excluir(request, response) {
            console.log('Rota DELETE /rastreador chamada...');
            console.log('request.params:');
            console.log(request.params);

            mongoose.connect(
                'mongodb://localhost:27017/rastro-dev', // string de conexão
                {
                    useNewUrlParser: true,
                    useUnifiedTopology: true,
                    useCreateIndex: true
                }
            )
            .then(() => {
                const Rastreamento = app.models.rastreamento;
                const Rastreador = app.models.rastreador;
                Rastreamento.deleteMany(
                    { codigoRastreador: request.params.codigoRastreador }
                )
                .then((resultadoDeleteRastreamento) => {
                    console.log(`resultadoDeleteRastreamento:`);
                    console.log(resultadoDeleteRastreamento);

                    Rastreador.deleteOne(
                        { codigoRastreador: request.params.codigoRastreador }
                    )
                    .then((resultadoDeleteRastreador) => {
                        console.log(`resultadoDeleteRastreador:`);
                        console.log(resultadoDeleteRastreador);
                        mongoose.disconnect();
                        if (resultadoDeleteRastreador.deletedCount > 0) {
                            if (resultadoDeleteRastreamento.deletedCount == 1) {
                                response.status(200).send(`Foi excluído ${resultadoDeleteRastreamento.deletedCount} documento de rastreamento e o documento do Rastreador.`);
                            } else {
                                response.status(200).send(`Foram excluídos ${resultadoDeleteRastreamento.deletedCount} documentos de rastreamento e o documento do Rastreador.`);
                            }                            
                        } else {
                            response.status(404).send(`Rastreador não localizado no cadastro.`);
                        }
                    })
                    .catch((erro) => {
                        console.log(`Erro ao excluir o documento do Rastreador: ${erro}`);
                        console.log(erro);
                        mongoose.disconnect();
                        response.status(500).send(`Erro ao excluir o documento do Rastreador: ${erro}`);    
                    });
                    
                })
                .catch((erro) => {
                    console.log(`Erro ao excluir os documentos de rastreamento do Rastreador: ${erro}`);
                    console.log(erro);
                    mongoose.disconnect();
                    response.status(500).send(`Erro ao excluir os documentos de rastreamento do Rastreador: ${erro}`);
                });

            })
            .catch((erro) => {
                console.log(`Erro ao conectar no banco MongoDB: ${erro}`);
                console.log(erro);
                response.status(500).send(`Erro ao conectar no banco MongoDB: ${erro}`);
            });

        }
    }

    return RastreadorController;
}


