const User = require("../models/user");

class UserDao {
    async getById(id) {
        return await User.findById(id);
    }

    async getByEmail(email) {
        return await User.findOne({ email });
    }

    async create(userData) {
        return await User.create(userData);
    }
}

module.exports = new UserDao();
