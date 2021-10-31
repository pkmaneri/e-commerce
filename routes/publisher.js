var express = require('express');
var router = express.Router();
var PublisherModel = require('../schema/publisherschema');
var mongoose = require('mongoose');

router.get('/publishers', function (req, res, next) {
    PublisherModel.find(function (err, data) {
        if (err) {
            console.error(err);
        } else {
            res.send(data);
        }
    });
});

router.post('/publisher', function (req, res, next) {
    var newPublisher = new PublisherModel();

    newPublisher.publisherName = req.body.publisherName;
    newPublisher.imgData=req.body.imgData
    console.log(req)

    newPublisher.save(function (err, data) {
        if (err) {
            console.log(error);
        }
        else {
            res.send("Data inserted");
        }
    });
});

router.delete('/publisher/:id', function (req, res, next) {
    var objectId = mongoose.Types.ObjectId(req.params.id);
    console.log(objectId, req.params.id)
    PublisherModel.deleteOne({ _id: objectId },
        function (err, data) {
            if (err) {
                console.error(err);
            } else {
                res.send(data);
            }
        });
});
router.put('/publisher', function (req, res, next) {
    PublisherModel.findByIdAndUpdate(req.body._id,
        {
            
            publisherName:req.body.publisherName,
            imgData:req.body.imgData
            
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
