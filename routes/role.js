var express = require('express');
var router = express.Router();
var RoleModel = require('../schema/roleschema');
var mongoose = require('mongoose');

router.get('/roles', function (req, res, next) {
    RoleModel.find(function (err, data) {
        if (err) {
            console.error(err);
        } else {
            res.send(data);
        }
    });
});

router.post('/role', function (req, res, next) {
    var newRole = new RoleModel();

    newRole.roleName = req.body.roleName;
    console.log(req)

    newRole.save(function (err, data) {
        if (err) {
            console.log(error);
        }
        else {
            res.send("Data inserted");
        }
    });
});
router.delete('/role/:id', function (req, res, next) {
    var objectId = mongoose.Types.ObjectId(req.params.id);
    console.log(objectId, req.params.id)
    RoleModel.deleteOne({ _id: objectId },
        function (err, data) {
            if (err) {
                console.error(err);
            } else {
                res.send(data);
            }
        });
});


router.put('/role', function (req, res, next) {
    RoleModel.findByIdAndUpdate(req.body._id,
        {           
            roleName:req.body.roleName,            
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
