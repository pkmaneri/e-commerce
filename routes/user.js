var express = require('express');
var router = express.Router();
var UserModel = require('../schema/userschema');
var mongoose = require('mongoose');

router.get('/users', function (req, res, next) {
    UserModel.find(function (err, data) {
        if (err) {
            console.error(err);
        } else {
            res.send(data);
        }
    });
});

router.post('/user', function (req, res, next) {
    var newUser = new UserModel();
    newUser.mobile = req.body.mobile;
    newUser.password = req.body.password;
    newUser.role = req.body.role;
    newUser.lastName = req.body.lastName;
    newUser.email = req.body.email;
    newUser.firstName=req.body.firstName
    newUser.gender = req.body.gender;
    newUser.address = req.body.address;
    newUser.address2 = req.body.address2;
    newUser.city = req.body.city;
    newUser.state = req.body.state;
    newUser.language=req.body.language
    newUser.zip = req.body.zip;
    newUser.imgData=req.body.imgData;
    newUser.country=req.body.country;
    newUser.organisation=req.body.organisation;


    newUser.save(function (err, data) {
        if (err) {
            console.log(error);
        }
        else {
            res.send("Data inserted");
        }
    });
});

router.delete('/user/:id', function (req, res, next) {
    var objectId = mongoose.Types.ObjectId(req.params.id);
    console.log(objectId, req.params.id)
    UserModel.deleteOne({ _id: objectId },
        function (err, data) {
            if (err) {
                console.error(err);
            } else {
                res.send(data);
            }
        });
});
router.put('/user', function (req, res, next) {
    UserModel.findByIdAndUpdate(req.body._id,
        {
            mobile: req.body.mobile,
            password: req.body.password,
            role: req.body.role,
            lastName: req.body.lastName,
            firstName:req.body.firstName,
            email: req.body.email,
            gender: req.body.gender,
            address: req.body.address,
            address2: req.body.address2,
            city: req.body.city,
            state: req.body.state,
            language:req.body.language,
            zip: req.body.zip,
            imgData:req.body.imgData,
            country:req.body.country,
            organisation:req.body.organisation

        },
        function (err, data) {
            if (err) {
                console.error(err);
            }
            else {
                res.send(data);
                console.log("Data updated!");
            }
        });
});

module.exports = router;
