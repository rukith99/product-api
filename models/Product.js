const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({

    shortName : {
        type : String,
        required: true
    },
    longName : {
        type : String,
        required: true
    },
    category : {
        type : String,
        required: true
    },
    gender : {
        type : String,
        required: true
    },
    price : {
        type : Number,
        required : true
    },
    dateAdded : {
        type : String,
        required: true
    },
})

const Product = mongoose.model("Product",productSchema);
module.exports = Product;