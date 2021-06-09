const propertiesReader = require('properties-reader');
const properties = propertiesReader('./app.properties');

module.exports = (app) => {
    const constantesApp = {
        porta: properties.get('app.porta') //porta do servidor modificada com atributos da pasta properties
    }
    return constantesApp;
}