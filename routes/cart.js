var express = require('express');
var router = express.Router();
var CartModel = require('../schema/cartschema');
var mongoose = require('mongoose');

router.post('/cart', function (req, res, next) {
    var model = new CartModel();
    model.bookId = req.body.bookId;
    model.save(function (err, data) {
        if (err) {
            console.log(error);
        }
        else {
            res.send(data);
        }
    });
});

router.get('/carts', function (req, res, next) {
    CartModel.find(function (err, data) {
        if (err) {
            console.error(err);
        } else {
            res.send(data);
        }
    });
});



module.exports = router;
