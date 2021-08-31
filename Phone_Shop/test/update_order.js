
const assert = require('assert')
const mongoose = require('mongoose')
const customer = require('../models/customer') 
mongoose.set('useUnifiedTopology', true);
mongoose.set('useFindAndModify', false);




describe('Updating Records!!!!', function(){


    //BeforeEach, It will be insert new Customer details
    beforeEach(function(done){
        
        var char = new customer({
            title: "Mr",
            Fname: "Steve",
            Lname: "Walshy",
            phoneNumber: 089164354233,
            email: "SteveW@hotmail.com",
            addressLine1: "24 Jobtown",
            addressLine2: "Tallaght",
            town: "Dublin",
            county: "Dublin",
            eircode: "D010 4210", 
        });

    char.save().then(function(){
        done();
    });
});


    //creating IT function to update one Customer record
    it('updating one Customer Address record from the database', function(done){
            
            //using customer model and find the data containing the address of 14 Monktown and update it to 54 Sandyford instead 
            customer.findOneAndUpdate({addressLine1: '14 Monktown'} , {addressLine1: '54 Sandyford'}).then(function(){
                //
                customer.findOne({_id: char._id}).then(function(result){
                    assert(result.addressLine1 === '54 Sandyford');
                });

            });
                done();

    });

 });   //next testing