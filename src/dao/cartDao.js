const Cart = require("../models/cart");

class CartDao {
    async getById(id) {
        return await Cart.findById(id).populate("products.product");
    }

    async update(id, cartData) {
        return await Cart.findByIdAndUpdate(id, cartData, { new: true });
    }
}

module.exports = new CartDao();
