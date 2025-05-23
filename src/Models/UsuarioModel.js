const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const Schema = mongoose.Schema;

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
    const user = this

    if (user.isModified("senha")){
        const salt = await bcrypt.genSalt();
        const hash = await bcrypt.hash(user.senha, salt); 

        user.senha = hash; 

        console.log({ salt, hash });
    }

    if (user.isModified("repetirSenha")){
        const salt = await bcrypt.genSalt();
        const hash = await bcrypt.hash(user.senha, salt); 

        user.repetirSenha = hash; 

        console.log({ salt, hash });
    }


    next()
});

const UsuarioModel = mongoose.model('usuarios', UsuarioSchema);

module.exports = UsuarioModel;
