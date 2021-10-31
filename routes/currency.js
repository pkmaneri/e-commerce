var express = require('express');
var router = express.Router();
var CurrencyModel = require('../schema/currencyschema');

router.get('/currencies', function (req, res, next) {
    CurrencyModel.find(function (err, data) {
        if (err) {
            console.error(err);
        } else {
            res.send(data);
        }
    });
});

module.exports = router;

