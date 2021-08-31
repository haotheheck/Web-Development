//including the important document for api to be to executed
const express = require('express');
const router = express.Router();
const Phone = require('../models/phone');

//get a list of the phone that was orderBy the customer from the db
router.get('/phone', function(req, res){
    Phone.find({}).then(function(phone){
        res.send(phone);
    });
});

// add a new phone order by the customer into db
router.post('/phone', function(req, res, next){

    //creating new data from phone model
    // requesting it from body
    // once its saved and pass successfully
    Phone.create(req.body).then(function(phone){
    //then it send out from phone db     
        res.send(phone); 
    }).catch(next);


});

//update phone from db
router.put('/phone/:id', function(req, res){
    //finding unique id from phoneshop database
    Phone.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){
        Phone.findOne({_id: req.params.id}).then(function(phone){
            //and update it 
                res.send(phone);
            });

    });
});

//delete phone from db
router.delete('/phone/:id', function(req, res){
    //finding the unique id from the phoneshop database
    Phone.findByIdAndRemove({_id: req.params.id}).then(function(phone){
        //then remove it
        res.send(phone);
    });
});

module.exports = router;