var express = require('express');
var router = express.Router();
var LanguageModel = require('../schema/languageschema');
var mongoose = require('mongoose');

router.get('/languages', function (req, res, next) {
    LanguageModel.find(function (err, data) {
        if (err) {
            console.error(err);
        } else {
            res.send(data);
        }
    });
});

router.post('/language', function (req, res, next) {
    var newLanguage = new LanguageModel();
    newLanguage.languageName=req.body.languageName

    newLanguage.save(function (err, data) {
        if (err) {
            console.log(error);
        }
        else {
            res.send("Data inserted");
        }
    });
});

router.delete('/language/:id', function (req, res, next) {
    var objectId = mongoose.Types.ObjectId(req.params.id);
    console.log(objectId, req.params.id)
    LanguageModel.deleteOne({ _id: objectId },
        function (err, data) {
            if (err) {
                console.error(err);
            } else {
                res.send(data);
            }
        });
});
router.put('/language', function (req, res, next) {
    LanguageModel.findByIdAndUpdate(req.body._id,
        {
            
            languageName:req.body.languageName,
            
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
