module.exports = (app) => {

    // criando rota para cadastrar rastreamento
    // POST
    // rota '/rastreamento'
    app.post('/rastreamento', app.controllers.rastreamento.cadastrar);
    //parâmetro.metodoPost(rota,parâmetro.nomedapasta.nomedoarquivo.nomedafunção)

    // criando rota para consultar rastreamentos por codigo de rastreador
    // GET
    // rota '/rastreamento/:codigoRastreador'
    app.get('/rastreamento/:codigoRastreador/', app.controllers.rastreamento.buscarPorCodigoRastreador);

}