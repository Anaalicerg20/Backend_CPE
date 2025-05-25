function verificarUsuario(req, res, next){
    const usuarioId = req.params.id || req.body.id_usuario || req.params.id_usuario;

    if(req.usuarioId !== usuarioId) return res.status(401).json({ message: "Operação não autorizada "});

    next(); 
}

module.exports = verificarUsuario; 