const { z } = require("zod")
const { ValidateRequest } = require("zod-express-middleware");

const create = ValidateRequest({
    body: z.object({
        nome: z.string({required_error: "O nome é obrigatorio"}),
        email: z.string({required_error: "O email é obrigatorio"}).email({required_error: "O email é invalido"})
        senha: z.string({required_error: "A senha é obrigatoria"}),
        cargo: z.string({required_error: "O cargo é obrigatorio"}),
        status: z.string({required_error: "O status é obrigatorio"}),

    }),
}); 

module.exports = {
    create,
};