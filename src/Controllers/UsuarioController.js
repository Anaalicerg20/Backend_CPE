const UsuarioModel = require("../Models/UsuarioModel");
const jwt = require("jsonwebtoken");

class UsuarioController{

    async create(req, res) {
        try {
            const usuario = await UsuarioModel.create(req.body);

            const { senha, repetirSenha,  ...novoUsuario} = usuario.toObject()

            console.log(usuario);
            return res.status(200).json(novoUsuario);
        } catch (error){
            res.status(500).json({message: "Deu ruim aqui!", error: error.message});
        }

    } 

    async read(req, res){
        const usuarios = await UsuarioModel.find();
        return res.status(200).json(usuarios); 
    }

    async update(req, res){
        try{
            const { id } = req.params;
            const usuarioEncontrado = await UsuarioModel.findById(id);
            
            if(!usuarioEncontrado) 
                return res.status(404).json({ message:"Usuario não encontrado "});
            
            const usuario = await usuarioEncontrado.set(req.body).save();

            res.status(200).json(usuario);
        } catch (error) {
            res
                .status(500)
                .json({ message : "Deu ruim aqui!, error: error.message "});
        }
    }

    async delete(req, res){
        try{
            const { id } = req.params

            const usuarioEncontrado = await UsuarioModel.findById(id);

            if(!usuarioEncontrado) 
                return res.status(404).json({ message:"Usuario não encontrado "});
            
            await usuarioEncontrado.deleteOne();

            res.status(200).json({"mensagem": "Usuario deletado com sucesso!"});
        } catch (error) {
                res
                    .status(500)
                    .json({ message : "Deu ruim aqui!, error: error.message "});
            }
    }

    async login(req, res) {
        
    }
}

module.exports = new UsuarioController();