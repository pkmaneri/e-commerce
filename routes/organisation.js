var express = require('express');
var router = express.Router();
var OrganisationModel = require('../schema/organisationschema');
var mongoose = require('mongoose');

router.get('/organisations', function (req, res, next) {
    OrganisationModel.find(function (err, data) {
        if (err) {
            console.error(err);
        } else {
            res.send(data);
        }
    });
});

router.post('/organisation', function (req, res, next) {
    var newOrganisation = new OrganisationModel();

    newOrganisation.organisationName = req.body.organisationName;
    newOrganisation.imgData=req.body.imgData

    newOrganisation.save(function (err, data) {
        if (err) {
            console.log(error);
        }
        else {
            res.send("Data inserted");
        }
    });
});

router.delete('/organisation/:id', function (req, res, next) {
    var objectId = mongoose.Types.ObjectId(req.params.id);
    console.log(objectId, req.params.id)
    OrganisationModel.deleteOne({ _id: objectId },
        function (err, data) {
            if (err) {
                console.error(err);
            } else {
                res.send(data);
            }
        });
});
router.put('/organisation', function (req, res, next) {
    OrganisationModel.findByIdAndUpdate(req.body._id,
        {
            
            organisationName:req.body.organisationName,
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
