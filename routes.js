const { Router } = require("express");
const UsuarioController = require("./src/Controllers/UsuarioController");
const SessoesController=require("./Controllers/SessoesComtroller");

const rotas = Router();

//usuarios
rotas.post('/usuarios', UsuarioController.create);
rotas.get('/usuarios', UsuarioController.read);
rotas. delete('usuarios/:id', UsuarioController.delete);

//sessoes
rotas.post('/sessoes', SessoesControllerController.create);
rotas.get('/sessoes', SessoesController.read);
rotas. delete('sessoes/:id', SessoesController.delete);


module.exports = rotas; 