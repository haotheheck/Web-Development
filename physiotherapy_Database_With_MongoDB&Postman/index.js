const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// setting up express app
const app = express(); 

//connecting to mongodb
mongoose.connect('mongodb://localhost/physio', {

//using 'use' features to successfully run mongoose
useCreateIndex: true,
useNewUrlParser: true,
useUnifiedTopology: true,
useFindAndModify: false
});

//Using enabling app to be allow to take in body parser from json
app.use(bodyParser.json());

//connecting to public folder containing frontend pages
app.use(express.static('public'));

//allowing express to use url
app.use(express.urlencoded({
    extended: true
}))

//error handing middleware
app.use(function(err, req, res, next){
    res.status(422).send({error: err.message});
});

//initialize routes from api 
app.use('/api', require('./routes/api'));


//listen for requests
app.listen(process.env.port || 4500, function(){
    console.log("Now listening for the requests");
}); 