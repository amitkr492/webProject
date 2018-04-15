
//PACKAGES
var express = require('express');
var app = express();
var port = process.env.PORT || 8080
var morgan = require('morgan');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var router = express.Router();
var appRoutes = require('./app/routes/api')(router); 
var path = require('path'); 


//MIDDLEWARE
app.use(morgan('dev'));
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use('/api',appRoutes);
app.use(express.static(__dirname+'/public'));




//DATABASE CONNECTION
mongoose.connect('mongodb://localhost/tutorial',function(err){
    if(err){
        console.log("Not connect "+ err);
    }
    else{
        console.log("Successfully connected to MongoDB");
    }
});



//ROUTES
/*
app.get('/',function(req,res){
    res.send("Hello Amit ")
});
*/

app.get('*',function(req,res){
    res.sendFile(path.join(__dirname +'/public/app/views/index.html'));

});



//SERVER PORT
app.listen( port , function(){
    console.log("Running the server!!! "+ port);
}); 









































/*
just for checking purpose that it is working properly

app.get('/',function(req,res){
    res.send("Hello World ")
});

*/