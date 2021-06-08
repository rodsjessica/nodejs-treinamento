const mongoose = require('mongoose');
//constante mongoose que vai trazer o mongoose objeto

module.exports = (app) => {
    //constante schema que recebe o objeto schema do mongoose
    const Schema = mongoose.Schema;
    //constante rastreamentoSchema que recebe dados json do objeto Schema
    const rastreamentoSchema = Schema(
        {
            codigoRastreador: { type: String, required: true },
            latitude: { type: Number, required: true },
            longitude: { type: Number, required: true },
            dataHora: { type: Date, required: true }
        }
    );

    const Rastreamento = mongoose.model('rastreamentos', rastreamentoSchema);
    //essa constante recebe a função model do mongoose(passando no primeiro 
    //parâmetro o nome da coleção, e no segundo o nome da constante que recebe o schema)
    return Rastreamento;

}