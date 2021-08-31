const mongoose = require('mongoose');
const Schema =mongoose.Schema;

//creating Doctor schema
const DoctorSchema = new Schema({

    DoctorReffered: {
        type: String,
        required: [true, 'Field is required']
    },
    WorkAddress: {
        type: String,
        required: [true, 'Field is required']
    },
    Permisson: {
        type: String,
        required: [true, 'Field is required']
    },
    phoneNumber: {
        type: Number,
        required: [true, 'Field is required']
    }
});
//creating Client Schema
const ClientSchema = new Schema({
    age: {
        type: Number,
        required: [true, 'Field is required']
    },
    gaurdianName: {
        type: String,
        required: [true, 'Field is required']
    },
    permission: {
        type: String, 
        required: [true, 'Field is required']
    },
    phoneNumber: {
        type: Number,
        required: [true, 'Field is required']
    },
    homeNumber: {
        type: String,
        required: [true, 'Field is required']
    },
    email: {
        type: String,
        required: [true, 'Field is required']
    },
    dateRegister: {
        type: String,
        required: [true, 'Field is required']
    }
});


//creating personal detail schema 
const PdetailSchema = new Schema({

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
    homeNumber: {
        type: Number,
        required: [true, 'Field is required']
    },
    email: {
        type: String,
        required: [true, 'Field is required']
    },
    addressLine1: {
        type: String,
        required: [true, 'Field is required']
    },
    addressLine2: {
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
    //creating client data folder to store client detail and doctor detail together 
    client : {
        clientDetail: ClientSchema,
        doctorDetail: DoctorSchema
    }
});


const Pdetail = mongoose.model('pdetail', PdetailSchema);

module.exports = Pdetail;