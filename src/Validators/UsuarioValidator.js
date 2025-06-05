const { default: mongoose } = require("mongoose");
const { z } = require("zod")
const { validateRequest } = require("zod-express-middleware");

const create = validateRequest({
    body: z.object({
        nome: z.string({required_error: "O nome é obrigatorio"}).min(1, { message: "O nome é obrigatorio" }),
        email: z.string({required_error: "O email é obrigatorio"}).email({required_error: "O email é invalido"}),
        cargo: z.string({required_error: "O cargo é obrigatorio"}).min(1, { message: "O cargo é obrigatorio" }),
        senha: z.string({required_error: "A senha é obrigatoria"}).min(1, { message: "A senha é obrigatoria" }),
        repetirSenha: z.string({required_error: "A repetição da senha é obrigatoria"}).min(1, { message: "A repetição da senha é obrigatoria" }), 

    }),
}); 

const destroy = validateRequest({
    params: z.object({
        id: z.custom(mongoose.isValidObjectId, "O id não é válido"),
    }),
});

const update = validateRequest({
    body: z.object({
        nome: z.string().optional(),
        email: z.string().email("O email é inválido").optional(),
        cargo: z.string().optional(),
        senha: z.string().optional(),
        repetirSenha: z.string().optional(),
    }),
    params: z.object({
        id: z.custom(mongoose.isValidObjectId, "O id não é válido"),
    }),
});

module.exports = {
    create,
    destroy,
    update,
};