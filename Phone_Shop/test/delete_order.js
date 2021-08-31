//adding const components 
const assert = require('assert')
const mongoose = require('mongoose')
//connecting 
const customer = require('../models/customer')
mongoose.set('useUnifiedTopology', true);

//Save records once function are running through
describe('Save Records!', function(){

    var char;

     // BeforeEach, It will be insert new Customer details
    beforeEach(function(done){
        
        var char = new customer({
            title: "Miss",
            Fname: "Daisy",
            Lname: "Healy",
            phoneNumber: 083453354233,
            email: "DaisyH@hotmail.com",
            addressLine1: "24 Parnell Street ",
            addressLine2: "Dublin City",
            town: "Dublin",
            county: "Dublin",
            eircode: "D001 0240", 
        });

    char.save().then(function(){
        done();

    //Save then close it 
    });
});


    //creating IT function to Delete one Customer record
    it('Deleting one customer record from the database!', function(done){
       //Using customer model to find the data containing the name of Lucy
       //then it will delete it from the record. 
       customer.findOneAndDelete({name: 'Lucy'}).then(function(){
           customer.findOne({name: 'Lucy'}).then(function(result){
               assert(result === null);
           });
           done();
       });
    });

 });  