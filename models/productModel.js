const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name: { type: String, required: true },
    image: { type: String, requried: true },
    category: { type: String, requried: true },
    brand: { type: String, requried: true },
    description: { type: String, requried: true },
    price: { type: Number, required: true },
    rating: { type: Number, required: true },
    numReviews: { type: Number, required: true },
    countInStock: { type: Number, required: true }
})

const Product = mongoose.model('Product', productSchema);

module.exports = Product;