const { Double } = require("mongodb");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({

    title : {
        type : String,
        required: true
    },
    description : {
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
    images : {
        type : [String],
        required: true
    },
    sizes : {
        type : [String],
        required: true
    },
    colors : {
        type : [String],
        required: true
    },
    dateAdded : {
        type : String,
        required: true
    },
})

const Product = mongoose.model("Product",productSchema);
module.exports = Product;