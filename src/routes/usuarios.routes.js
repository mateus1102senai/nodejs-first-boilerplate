import { Router } from "express";
import UsersRepository from "../models/users/UsersRepository.js";

const usuariosRoutes = Router();

const usersRepository = new UsersRepository();

usuariosRoutes.get("/", (req, res) => {
    const usuarios = usersRepository.getAllUsers();

    return res.status(200).json({
        message:
        usuarios.length == 0
        ? "Não há usuários cadastrados" : 'Todos os usuários: ${usuarios.length}',
        usuarios,
    })
});

usuariosRoutes.post("/", (req, res) => {
    const { name, email, password } = req.body;

   const usuario = usersRepository.addUser(name, email, password);

    return res.status(201).json({
        message: "Usuário cadastrado com sucesso",
        usuario,
    });
});

usuariosRoutes.get("/:id", (req, res) => {
    const { id } = req.params;
    const usuario = usersRepository.getUserById(id);

    if (!usuario) {
        return res.status(404).json({
            message: "Usuário não encontrado",
        });
    }

    return res.status(200).json({
        message: 'Usuário com id ${id} encontrado',
        usuario,
    });
});

usuariosRoutes.put("/:id", (req, res) => {
    const { id } = req.params
    const { name, email, password } = req.body;

    const user = usersRepository.uptadeUser(id, name, email, password);

    if (!user) {
        return res.status(404).json({
            message: "Usuário com id ${id} não encontrado",
        });
    }


    return res.status(200).json({
        message: "Usuário com id ${id} atualizado com sucesso",
        usuario,
    });
});

usuariosRoutes.delete("/:id", (req, res) => {});



export default usuariosRoutes;