import User from './User.js';

class UsersRepository {
  constructor() {
    this.users = [];

  }

  getAllUsers() {
    return this.users;
  }

  addUser(name, email, passoword) {
    const usuario = new User(name, email, passoword);
    this.users.push(usuario);

    return usuario;
  }

  getUserById(id) {
    const usuario = this.users.find((usuario) => usuario.id == id);

    return usuario;
  }

  uptadeUser(id, name, email, password) {
    const usuario = this.getUserById(id);

    if (!usuario) {
      return null;
    }

    usuario.name = name;
    usuario.email = email;
    usuario.password = password;

    return usuario;
  }
}


export default UsersRepository;
