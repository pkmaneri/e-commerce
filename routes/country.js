var express = require('express');
var router = express.Router();
var ContryModel = require('../schema/countryschema');

router.get('/countries', function (req, res, next) {
    ContryModel.find(function (err, data) {
        if (err) {
            console.error(err);
        } else {
            res.send(data);
        }
    });
});
router.post('/country', function (req, res, next) {
    var newCountry = new ContryModel();  
    newCountry.name = req.body.name;
    newCountry.available = req.body.available ;

    console.log(req)

    newCountry.save(function (err, data) {
        if (err) {
            console.log(error);
        }
        else {
            res.send("Data inserted");
        }
    });
});

router.delete('/country/:id', function (req, res, next) {
    var objectId = mongoose.Types.ObjectId(req.params.id);
    console.log(objectId, req.params.id)
    ContryModel.deleteOne({ _id: objectId },
        function (err, data) {
            if (err) {
                console.error(err);
            } else {
                res.send(data);
            }
        });
});
router.put('/country', function (req, res, next) {
    ContryModel.findByIdAndUpdate(req.body._id,
        {
            available:req.body.available,
            name:req.body.name        
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