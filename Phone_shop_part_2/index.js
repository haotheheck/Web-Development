//important documents component to compile it together
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


// setting up express app
const app = express(); 

//connecting to mongodb
mongoose.connect('mongodb://localhost/phoneshop', {

//using 'use' features to successfully run mongoose
useCreateIndex: true,
useNewUrlParser: true,
useUnifiedTopology: true,
useFindAndModify: false
});

//error handing middleware
app.use(function(err, req, res, next){
    res.status(422).send({error: err.message});
});

app.use(bodyParser.json());

//initialize routes from api 
app.use('/api', require('./routes/api'));

//listen for requests
app.listen(process.env.port || 4000, function(){
    console.log("Now listening for the requests");
});
