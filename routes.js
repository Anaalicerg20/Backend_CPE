const { Router } = require("express");
const UsuarioController = require("./src/Controllers/UsuarioController");
const SessoesController = require("./src/Controllers/SessoesController");
const AuthController = require("./src/Controllers/AuthController")
const UsuarioValidator = require("./src/Validators/UsuarioValidator");
const SessoesValidator = require("./src/Validators/SessoesValidator")
const AuthValidator = require("./src/Validators/AuthValidator")

const rotas = Router();

//usuarios
rotas.post('/usuarios', UsuarioValidator.create, UsuarioController.create);
rotas.get('/usuarios', UsuarioController.read);
rotas.delete('/usuarios/:id', UsuarioValidator.destroy, UsuarioController.delete);
rotas.put('/usuarios/:id', UsuarioValidator.update, UsuarioController.update);

//sessoes
rotas.post('/sessoes', SessoesValidator.create, SessoesController.create);
rotas.get('/sessoes', SessoesController.read);
rotas.delete('/sessoes/:id', SessoesValidator.destroy, SessoesController.delete);

//AUTH
rotas.post("/login", AuthValidator.login, AuthController.login);

module.exports = rotas; 