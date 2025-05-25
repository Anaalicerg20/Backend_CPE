const mongoose = require("mongoose");
const SessoesModel = require("./SessoesModel")
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const UsuarioSchema = new Schema({
    nome: {
        type: String,
        unique: true, 
    },

    email: {
        type: String,
        unique: true, 
    },

    cargo: String,

    senha: {
        type: String,
        select: false, 
    },

    repetirSenha: {
        type: String,
        select: false, 
    },

});

UsuarioSchema.pre("save", async function (next) {
    const usuario = this;

    if (usuario.isModified("senha")){
        const salt = await bcrypt.genSalt();
        const hash = await bcrypt.hash(usuario.senha, salt); 

        usuario.senha = hash; 

        console.log({ salt, hash });
    }
    next();
});

UsuarioSchema.pre(
    "deleteOne",
    { document: true, query: false }, 
    async function(){
        const usuario = this;

        return SessoesModel.deleteOne({ id_usuario: usuario._id});
    }
);

const UsuarioModel = mongoose.model('usuarios', UsuarioSchema);

module.exports = UsuarioModel;
