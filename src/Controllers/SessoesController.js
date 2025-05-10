// const { create } = require("../../Models/SessoesModel");
const SessoesModel = require('../../Models/SessoesModel');

class SessoesController{
    async create(req, res){
        const sessoes = await SessoesModel.create(req.body)

        return res.status(200).json(sessoes);
    }

    async read(req, res){
        const sessoes = await SessoesModel.find().populate('id_usuario', '-senha');
        return res.status(200).json(sessoes); 
    }

    async update(req, res){
        const { id } = req.params;

        const sessoes = await SessoesModel.findByIdAndUpdate(id, req.body, {new: true })
        return res.status(200).json(sessoes);

    }

    async delete(req, res){
        const { id } = req.params

        await SessaoModel.findByIdAndDelete

        return res.status(200).json({"mensagem": "Sessao deletado com sucesso!"});
    }
}

module.exports = new SessoesController();