const Product = require("../models/product.model.js");

class ProductDao {
    async getById(id) {
        return await Product.findById(id);
    }

    async update(id, productData) {
        return await Product.findByIdAndUpdate(id, productData, { new: true });
    }
}

module.exports = new ProductDao();
