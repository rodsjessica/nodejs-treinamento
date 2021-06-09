const propertiesReader = require('properties-reader'); //constante traz o modulo properties-reader
const properties = propertiesReader('./app.properties');

module.exports = (app) => {
    const constantesDb = { //string de conexão do mongo foi modificada para segurança do dados do banco,com os atributos do app.properties
        connection: `mongodb://${properties.get('db.servidor')}:${properties.get('db.porta')}/${properties.get('db.database')}`,
        connectionParams: { //padrão parâmetros de conexão 
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        } 
    }
    return constantesDb;
}