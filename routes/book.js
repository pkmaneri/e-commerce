var express = require('express');
var router = express.Router();
var BookModel = require('../schema/bookschema');
var mongoose = require('mongoose');

router.get('/books', function (req, res, next) {
    BookModel.find(function (err, data) {
        if (err) {
            console.error(err);
        } else {
            res.send(data);
        }
    });
});


router.post('/book', function (req, res, next) {
    var newBookTitle = new BookModel();
    newBookTitle.publisher = req.body.publisher;
    newBookTitle.category =req.body.category
    newBookTitle.author = req.body.author;
    newBookTitle.bookPrice = req.body.bookPrice;
    newBookTitle.language = req.body.language;
    newBookTitle.releaseDate = req.body.releaseDate;
    newBookTitle.isbnNo = req.body.isbnNo;
    newBookTitle.imgData=req.body.imgData;
    newBookTitle.noOfPages = req.body.noOfPages;
    newBookTitle.binding = req.body.binding;
    newBookTitle.returnable = req.body.returnable;
    newBookTitle.height = req.body.height;
    newBookTitle.width = req.body.width;
    newBookTitle.spineWidth=req.body.spineWidth;
    newBookTitle.bookId=req.body.bookId;
    newBookTitle.currency=req.body.currency;


    newBookTitle.save(function (err, data) {
        if (err) {
            console.log(error);
        }
        else {
            res.send("Data inserted");
        }
    });
});

router.get('/book/:id', function (req, res, next) {
    var objectId = mongoose.Types.ObjectId(req.params.id);
    console.log(objectId, req.params.id)
    BookModel.findById({ _id: objectId },
        function (err, data) {
            if (err) {
                console.error(err);
            } else {
                res.send(data);
            }
        });
});

router.delete('/book/:id', function (req, res, next) {
    var objectId = mongoose.Types.ObjectId(req.params.id);
    console.log(objectId, req.params.id)
    BookModel.deleteOne({ _id: objectId },
        function (err, data) {
            if (err) {
                console.error(err);
            } else {
                res.send(data);
            }
        });
});
router.put('/book', function (req, res, next) {
    BookModel.findByIdAndUpdate(req.body._id,
        {
            publisher:req.body.publisher,
            category:req.body.category,
            author:req.body.author,
            language:req.body.language,
            releaseDate:req.body.releaseDate,
            isbnNo:req.body.isbnNo,
            bookPrice:req.body.bookPrice,
            noOfPages: req.body.noOfPages,
            binding:req.body.binding,
            available:req.body.available,
            width:req.body.width,
            height:req.body.height,
            spineWidth:req.body.spineWidth,
            imgData:req.body.imgData,
            returnable:req.body.returnable,
            bookId:req.body.bookId,
            currency:req.body.currency,

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