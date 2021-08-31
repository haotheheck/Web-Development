const mongoose = require('mongoose');
const customer = require('./customer');
const product = require('./product');
const Schema = mongoose.Schema;

///create Schema and Model

const productSchema = new mongoose.Schema({
    manufactor:String,
    model:String,
    price:Number,

})


const CustomerSchema = new mongoose.Schema({

    title: String,
    Fname: String,
    Lname: String,
    phoneNumber: Number,
    email: String,
    adaressLine1: String,
    addressLine2: String,
    town: String,
    county: String,
    eircode: String,
    
    });

//combing Product and Customer as nested document into OrderSchema 
const OrderSchema = new mongoose.Schema({

    product:[productSchema],
    customer:[CustomerSchema]
    
});

const Order = mongoose.model('order', OrderSchema)

module.exports = Order;