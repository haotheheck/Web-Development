const mongoose = require('mongoose');
const Schema = mongoose.Schema;

///create Schema and Model

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

const customer = mongoose.model('customer', CustomerSchema)

module.exports = customer;