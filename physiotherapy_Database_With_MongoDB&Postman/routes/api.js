//including the important document for api to be to executed
const express = require('express');
const router = express.Router();
const Pdetail = require('../models/pdetail');
const Session = require('../models/session');



///Pdetail route
//get a list of of all personal detail in pdetail
router.get('/pdetail', function(req, res, next){

    Pdetail.find({}).then(function(pdetail){
        res.send(pdetail);
    });
});
//Insert a new personal detail into the database 
router.post('/pdetail', function(req, res, next){
    //creating new data from phone model
    // requesting it from body
    // once its saved and pass successfully
    Pdetail.create(req.body).then(function(pdetail){
        res.send(pdetail);
    }).catch(next);
});
//connect to localhost:4500/api/pdetail/  anding finding the unique id through ':id'
// then replace it with body json
router.put('/pdetail/:id', function(req, res, next){
        //finding unique id from phoneshop database
    Pdetail.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){
        Pdetail.findOne({_id: req.params.id}).then(function(pdetail){
            //and update it 
                res.send(pdetail);
            });
    });
    
});
router.delete('/pdetail/:id', function(req, res, next){
    //finding the unique id from the physio database
    Pdetail.findByIdAndRemove({_id: req.params.id}).then(function(pdetail){
        //then remove it
        res.send(pdetail);
    });
});


/////session routes
//get a list of of all session detail in session
router.get('/session', function(req, res, next){
    Session.find({}).then(function(session){
        res.send(session);
    });
});
//Insert a new session detail into the database 
router.post('/session', function(req, res, next){
    //creating new data from session model
    // requesting it from body
    // once its saved and pass successfully
    Session.create(req.body).then(function(session){
        res.send(session);
    }).catch(next);
});
//connect to localhost:4500/api/session/  anding finding the unique id through ':id'
// then replace it with body json
router.put('/session/:id', function(req, res, next){
        //finding unique id from phoneshop database
        Session.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){
            Session.findOne({_id: req.params.id}).then(function(session){
            //and update it 
                res.send(session);
            });
    });
    
});
router.delete('/session/:id', function(req, res, next){
    //finding the unique id from the session database
    Session.findByIdAndRemove({_id: req.params.id}).then(function(session){
        //then remove it
        res.send(session);
    });
});


module.exports = router;
