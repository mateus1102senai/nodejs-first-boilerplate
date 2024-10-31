class User {
    constructor(id, name, password) {
        this.id = this.generateId();
        this.name = name;
        this.password = password;
    }

    generateId() {
        return Math.floor(Math.random() * 999) + 1;
    }   
}


    