const UserDao = require("..userDao.js");

class UserRepository {
    constructor(dao) {
        this.dao = dao;
    }

    async findUserById(id) {
        return this.dao.getById(id);
    }

    async findUserByEmail(email) {
        return this.dao.getByEmail(email);
    }

    async createUser(userData) {
        return this.dao.create(userData);
    }
}

module.exports = new UserRepository(UserDao);
