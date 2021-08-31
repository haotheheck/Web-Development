//adding const components 
const assert = require('assert');
const mongoose = require('mongoose');
const Order = require('../models/order');

mongoose.set('useUnifiedTopology', true);


describe('Saving Records!!!', function(){


     // BeforeEach, It will be insert new Customer details
    it('creating new order for Customer with their new product', function(done){

        //using order model as a data references to insert new customer and their product 
        var char = new Order({
            customer:[{
                title: "Mr",
                Fname: "Lucy",
                Lname: "Star",
                phoneNumber: 087164324823,
                email: "Lstar@hotmail.com",
                adaressLine1: "14 Monktown",
                addressLine2: "Blackrock",
                town: "Dublin",
                county: "Dublin",
                eircode: "D010 4210", }],
                product: [{ 
                    manufactor:"One Plus",
                    model:"One plus 9 Pro ",
                    price: 1400}],
            
        });

        
        char.save().then(function(){
            assert(char.isNew === false); 
        });

        done();
    });
});