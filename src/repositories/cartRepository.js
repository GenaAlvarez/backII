const CartDao = require("../dao/cartDao.js");

class CartRepository {
    constructor(dao) {
        this.dao = dao;
    }

    async findCartById(id) {
        return this.dao.getById(id);
    }

    async updateCart(id, cartData) {
        return this.dao.update(id, cartData);
    }
}

module.exports = new CartRepository(CartDao);
