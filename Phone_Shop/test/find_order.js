//adding const components 
const assert = require('assert');
const Order = require('../models/order')
const mongoose = require('mongoose');
const customer = require('../models/customer');
mongoose.set('useUnifiedTopology', true);


//Save records once function are running through
describe('Save Records!!', function(){

    //BeforeEach, It will be insert new Customer details
    beforeEach(function(done){
        
        var char = new Order({
            customer:[{
                title: "Mr",
                Fname: "Tom",
                Lname: "Brady",
                phoneNumber: 0871663292823,
                email: "bradylad@hotmail.com",
                addressLine1: "14 Kinbury",
                addressLine2: "Maynooth",
                town: "Kildare",
                county: "Kildare",
                eircode: "D420 1210", }],

        });

        
        char.save().then(function(){
            assert(char.isNew === false); 
        });

        done();
     //Save then close it 
});


    //creating IT function to find one Customer record
    it('Finding customer by name in database!', function(done){
       //using customer model to find the name that match Lucy
       customer.findOne({name: 'Lucy'}).then(function(result){

            done();  
         })

    });

});