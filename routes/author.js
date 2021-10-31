var express = require('express');
var router = express.Router();
var AuthorModel = require('../schema/authorschema');
var mongoose = require('mongoose');

router.get('/authors', function (req, res, next) {
    AuthorModel.find(function (err, data) {
        if (err) {
            console.error(err);
        } else {
            res.send(data);
        }
    });
});

router.post('/author', function (req, res, next) {
    var newAuthor = new AuthorModel();
    newAuthor.imgData=req.body.imgData
    newAuthor.authorName = req.body.authorName;
    // console.log(req)

    newAuthor.save(function (err, data) {
        if (err) {
            console.log(error);
        }
        else {
            res.send("Data inserted");
        }
    });
});

router.delete('/author/:id', function (req, res, next) {
    var objectId = mongoose.Types.ObjectId(req.params.id);
    console.log(objectId, req.params.id)
    AuthorModel.deleteOne({ _id: objectId },
        function (err, data) {
            if (err) {
                console.error(err);
            } else {
                res.send(data);
            }
        });
});
router.put('/author', function (req, res, next) {
    AuthorModel.findByIdAndUpdate(req.body._id,
        {
            
            authorName:req.body.authorName,
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
