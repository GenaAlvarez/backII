const ProductDao = require("../dao/productDao.js");

class ProductRepository {
    constructor(dao) {
        this.dao = dao;
    }

    async findProductById(id) {
        return this.dao.getById(id);
    }

    async updateProduct(id, productData) {
        return this.dao.update(id, productData);
    }
}

module.exports = new ProductRepository(ProductDao);
