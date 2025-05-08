const { create } = require("../../Models/SessoesModel");
const SessoesModel = require('../../Models/SessoesModel');

class SessoesControllers{
    async create(req, res){
        const sessoes = await SessoesModel.create(req.body)

        return res.status(200).json(sessoes);
    }

    async read(req, res){
        const sessoes = await SessoesModel.find();
        return res.status(200).json(sessoes); 
    }

    update(req, res){
        
    }

    async delete(req, res){
        const { id } = req.params

        await SessaoModel.findByIdAndDelete

        return res.status(200).json({"mensagem": "Sessao deletado com sucesso!"});
    }
}

module.exports = new SessoesController();