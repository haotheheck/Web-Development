//adding const components 
const assert = require('assert')
const mongoose = require('mongoose')
mongoose.set('useUnifiedTopology', true);





     // making sure a connection is running through to the db.  
     // Making sure it established prior to testing
    before((done)=>{
    mongoose.connect('mongodb://localhost/testaroo', {
        useNewUrlParser: true
    })
    //if connected then it should be successfull
    .then( console.log('Connection has been made, now this is SUCCESS!!!'))

    //or else it will just send error mssage 
    .catch('error', function(error){
        console.log('Connect just went poop!!:', error);
    });
    done();
});
