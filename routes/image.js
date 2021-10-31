var express = require('express');
var router = express.Router();
var ImageModel = require('../schema/imageschema');
var mongoose = require('mongoose');

router.get('/image/:id', function (req, res, next) {
    var objectId = mongoose.Types.ObjectId(req.params.id);
    console.log(objectId, req.params.id)
    ImageModel.find({ _id: objectId },
        function (err, data) {
            if (err) {
                console.error(err);
            } else {
                res.send(data);
            }
        });
});
router.get('/images', function (req, res, next) {
    ImageModel.find(function (err, data) {
        if (err) {
            console.error(err);
        } else {
            res.send(data);
        }
    });
});

router.post('/image', function (req, res, next) {
    var newImage = new ImageModel();
    newImage.data = req.body.data;
    newImage.save(function (err, data) {
        if (err) {
            console.log(error);
        }
        else {
            res.send(data);
        }
    });
});

router.delete('/image/:id', function (req, res, next) {
    var objectId = mongoose.Types.ObjectId(req.params.id);
    console.log(objectId, req.params.id)
    ImageModel.deleteOne({ _id: objectId },
        function (err, data) {
            if (err) {
                console.error(err);
            } else {
                res.send(data);
            }
        });
});



router.put('/image', function (req, res, next) {
    ImageModel.findByIdAndUpdate(req.body._id,
        {
            imageName: req.body.imageName,
          
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
