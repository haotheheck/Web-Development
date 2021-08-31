const mongoose = require('mongoose');
const Schema =mongoose.Schema;

//creating phone Schema and model

const CustomerSchema = new Schema({

    title: {
        type: String,
        required: [true, 'Field is required']
    },
    Fname: {
        type: String,
        required: [true, 'Field is required']
    },
    Lname: {
        type: String,
        required: [true, 'Field is required']
    },
    phoneNumber: {
        type: Number,
        required: [true, 'Field is required']
    },
    email: {
        type: String,
        required: [true, 'Field is required']
    },
    adaressLine1: {
        type: String,
        required: [true, 'Field is required']
    },
    adaressLine2: {
        type: String,
        required: [true, 'Field is required']
    },
    town: {
        type: String,
        required: [true, 'Field is required']
    },
    county: {
        type: String,
        required: [true, 'Field is required']
    },
    eircode: {
        type: String,
        required: [true, 'Field is required']
    },
})

const PhoneSchema = new Schema({
    manufacturer: {
        type: String
    },
    model: {
        type: String
    },
    price: {
        type: Number
    },
    //Connecting the customer to the PhoneSchema and assigned orderBy with CustomerSchema
    orderBy: CustomerSchema
});


const Phone = mongoose.model('phone', PhoneSchema);

module.exports = Phone;