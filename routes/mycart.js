var express = require('express');
var router = express.Router();
var myCartModel = require('../schema/mycartschema');
var mongoose = require('mongoose');

router.get('/mycarts', function (req, res, next) {
    myCartModel.find(function (err, data) {
        if (err) {
            console.error(err);
        } else {
            res.send(data);
        }
    });
});

router.post('/mycart', function (req, res, next) {
    var newProductUser = new myCartModel();
    newProduct.pname=req.body.pname;
    newProduct.pprice=req.body.pprice;
    newProduct.pphoto=req.body.pphoto;
    newProduct.details=req.body.details;

    newProductUser.save(function (err, data) {
        if (err) {
            console.log(error);
        }
        else {
            res.send("Data inserted");
        }
    });
});



router.delete('/mycart/:id', function (req, res) {
    var objectId = mongoose.Types.ObjectId(req.params.id);
    console.log(objectId, req.params.id)
    myCartModel.deleteOne({ _id: objectId },
        function (err, data) {
            if (err) {
                console.error(err);
            } else {
                res.send(data);
            }
        });
});

module.exports = router;
