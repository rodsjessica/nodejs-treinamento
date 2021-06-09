const propertiesReader = require('properties-reader');
const properties = propertiesReader('./app.properties');

module.exports = (app) => {
    const constantesSeguranca = {
        custoHash: properties.get('seguranca.custo.hash') //custo hash: boas praticas para criptografar uma senha
    }                                                   
    return constantesSeguranca;
}