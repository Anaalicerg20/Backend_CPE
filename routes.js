const { Router } = require("express");
const UsuarioController = require("./src/Controllers/UsuarioController");
const SessoesController = require("./src/Controllers/SessoesController");
const AuthController = require("./src/Controllers/AuthController")
const UsuarioValidator = require("./src/Validators/UsuarioValidator");
const SessoesValidator = require("./src/Validators/SessoesValidator");
const AuthValidator = require("./src/Validators/AuthValidator");
const verificarJwt = require("./src/Middlewares/verificarJwt");
const verificarUsuario = require("./src/Middlewares/verificarUsuario");


const rotas = Router();

//usuarios
rotas.post('/usuarios', UsuarioValidator.create, UsuarioController.create);
rotas.get('/usuarios', verificarJwt, UsuarioController.read);
rotas.delete('/usuarios/:id', verificarJwt, verificarUsuario, UsuarioValidator.destroy, UsuarioController.delete);
rotas.put('/usuarios/:id', verificarJwt, verificarUsuario, UsuarioValidator.update, UsuarioController.update);

//sessoes
rotas.post('/sessoes', verificarJwt, verificarUsuario, SessoesValidator.create, SessoesController.create);
rotas.get('/sessoes', SessoesController.read);
rotas.delete('/sessoes/:id_usuario', verificarJwt, verificarUsuario,  SessoesValidator.destroy, SessoesController.delete);

//AUTH
rotas.post("/login", AuthValidator.login, AuthController.login);

module.exports = rotas; 