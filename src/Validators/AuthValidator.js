const { z } = require("zod")
const { validateRequest } = require("zod-express-middleware");

const login = validateRequest({
    body: z.object({
        email: z
        .string({required_error: "O email é obrigatorio"})
        .email({required_error: "O email é invalido"}),
        
        senha: z.string({ required_error: "Asenha é obrigatória" }),
    }),
}); 

module.exports = { 
    login,
}