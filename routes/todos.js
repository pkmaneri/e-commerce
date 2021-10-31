var express = require('express');
var router = express.Router();
var TodoModel = require('../schema/todoschema');
var mongoose = require('mongoose');


router.get('/todos', function (req, res, next) {
    TodoModel.find(function (err, data) {
        if (err) {
            console.error(err);
        } else {
            res.send(data);
        }
    });
});

router.post('/todo', function (req, res, next) {
    var newTodo = new TodoModel();
    newTodo.email=req.body.email;
    newTodo.comment=req.body.comment;
    newTodo.checked=req.body.checked;


    newTodo.save(function (err, data) {
        if (err) {
            console.log(error);
        }
        else {
            res.send("Data inserted");
        }
    });
});



router.delete('/todo/:id', function (req, res) {
    var objectId = mongoose.Types.ObjectId(req.params.id);
    console.log(objectId, req.params.id)
    TodoModel.deleteOne({ _id: objectId },
        function (err, data) {
            if (err) {
                console.error(err);
            } else {
                res.send(data);
            }
        });
});
router.put('/todo/:id', function (req, res, next) {
    TodoModel.findByIdAndUpdate(req.body._id,
        {
            
            email:req.body.email,
            comment:req.body.comment,
            checked:req.body.checked,

            
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
