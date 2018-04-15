var User = require('../models/user')


module.exports =    function(router){

//http:/localhost:8080/api/users
router.post('/users',function(req,res){
    var user = new User();
    user.username = req.body.username;
    user.password = req.body.password;
    user.email = req.body.email

/*
    
    //Ensureing all value are provided
    if( req.body.username==null || username=='' || req.body.password == null || req.body.password=='' || req.body.email==null || req.body.email == ''){
        res.send("Ensure that username , email and password is provided");

    }else{
        user.save(function(err){
            //getting error when there is duplicate username
        if(err) {
            res.send(err);
        }
        else{
             res.send("User created");  
        }

    });

    }


*/

user.save();



});

return router;

}