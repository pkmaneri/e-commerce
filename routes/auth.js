var express = require('express');
var router = express.Router();
var UserModel = require('../schema/userschema');

router.post('/login', function (req, res, next) {
    console.log(req.body)
    UserModel.findOne(req.body, function (err, data) {
        if (err) {
            res.send("Something went wrong!");
        }
        else {
            console.log(data)
            if(data) {
                res.send(data);
            }else{
                res.send("User not found.");  
            }
        }
    })
});

router.post('/register', function (req, res, next) {

    var newUser = new UserModel();
    newUser.password = req.body.password;
    newUser.role = "60a74936a086c70c4898103b";
    newUser.lastName = req.body.lastName;
    newUser.email = req.body.email;
    newUser.firstName=req.body.firstName
    newUser.gender = req.body.gender;
    newUser.city = req.body.city;
    newUser.country=req.body.country

    newUser.save(function (err, data) {
        if (err) {
            console.log(error);
        }
        else {
            res.send("Registration done");
        }
    });
});

module.exports = router;
