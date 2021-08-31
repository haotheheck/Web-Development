const mongoose =require("mongoose");
const Schema = mongoose.Schema;

///create Schema and Model

const productSchema = new mongoose.Schema({
    manufactor:String,
    model:String,
    price:Number,

})

const product = mongoose.model("product", productSchema);

module.exports = product; 