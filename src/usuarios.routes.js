import { Router } from "express";

const candidatosRoutes = Router();

let usuarios = [];

usuariosRoutes.get("/", (req, res) => {
    return res.status(200).json({
        menssage:
        usuarios.length == 0
        ? "Não há usuários cadastrados" : 'Todos os usuários: ${usuarios.length}',
        usuarios,
    })
});

export default candidatosRoutes;