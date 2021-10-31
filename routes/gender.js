var express = require('express');
var router = express.Router();
var GenderModel = require('../schema/genderschema');
var mongoose = require('mongoose');

router.get('/genders', function (req, res, next) {
    GenderModel.find(function (err, data) {
        if (err) {
            console.error(err);
        } else {
            res.send(data);
        }
    });
});

router.post('/gender', function (req, res, next) {
    var newGender = new GenderModel();

    newGender.genderName = req.body.genderName;
    console.log(req)

    newGender.save(function (err, data) {
        if (err) {
            console.log(error);
        }
        else {
            res.send("Data inserted");
        }
    });
});
router.delete('/gender/:id', function (req, res, next) {
    var objectId = mongoose.Types.ObjectId(req.params.id);
    console.log(objectId, req.params.id)
    GenderModel.deleteOne({ _id: objectId },
        function (err, data) {
            if (err) {
                console.error(err);
            } else {
                res.send(data);
            }
        });
});


router.put('/gender', function (req, res, next) {
    GenderModel.findByIdAndUpdate(req.body._id,
        {           
            genderName:req.body.genderName,            
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
