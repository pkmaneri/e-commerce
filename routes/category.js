var express = require('express');
var router = express.Router();
var CategoryModel = require('../schema/categoryschema');
var mongoose = require('mongoose');

router.get('/categories', function (req, res, next) {
    CategoryModel.find(function (err, data) {
        if (err) {
            console.error(err);
        } else {
            res.send(data);
        }
    });
});

router.post('/category', function (req, res, next) {
    var newCategory = new CategoryModel();
    newCategory.categoryName = req.body.categoryName;
    newCategory.link = req.body.link;
    newCategory.available = req.body.available ;
    newCategory.imgData=req.body.imgData;

    console.log(req)

    newCategory.save(function (err, data) {
        if (err) {
            console.log(error);
        }
        else {
            res.send("Data inserted");
        }
    });
});

router.delete('/category/:id', function (req, res, next) {
    var objectId = mongoose.Types.ObjectId(req.params.id);
    console.log(objectId, req.params.id)
    CategoryModel.deleteOne({ _id: objectId },
        function (err, data) {
            if (err) {
                console.error(err);
            } else {
                res.send(data);
            }
        });
});
router.put('/category', function (req, res, next) {
    CategoryModel.findByIdAndUpdate(req.body._id,
        {
            link:req.body.link,
            available:req.body.available ,
            categoryName:req.body.categoryName,
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
