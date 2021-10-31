// var express = require('express');
// var router = express.Router();
// var TodoModel = require('../schema/todoschema');

// router.get('/todos', function (req, res, next) {
//     TodoModel.find(function (err, data) {
//         if (err) {
//             console.error(err);
//         } else {
//             res.send(data);
//         }
//     });
// });

// router.post('/book/:filename/:pageNo', function (req, res, next) {
//     const content = req.body.d;
//     const filename = "/Users/pappukumar/mean-stack-starter/data-science/"+req.params.filename
//     const pageNo = req.params.pageNo;
    
//     if (!fs.existsSync(filename)){
//         fs.mkdirSync(filename);
//     }

//     fs.writeFile(filename + "/" + pageNo + '.html', content, err => {
//         if (err) {
//             console.error(err)
//             return
//         }
//     })
// });

// router.put('/todo', function (req, res, next) {
//     TodoModel.findByIdAndUpdate(req.body._id,
//         {
//             email: req.body.email,
//             comment: req.body.comment,
//             // type: req.body.type,
//             checked: req.body.checked

//         },
//         function (err, data) {
//             if (err) {
//                 console.error(err);
//             }
//             else {
//                 res.send(data);
//                 console.log("Data updated!");
//             }
//         });
// });



// router.post('/todo', function (req, res, next) {
//     var newTodo = new TodoModel();
//     newTodo.email = req.body.email;
//     newTodo.comment = req.body.comment;
//     // newTodo.type = req.body.type;
//     newTodo.checked = req.body.checked;

//     console.log(req)

//     newTodo.save(function (err, data) {
//         if (err) {
//             console.log(error);
//         }
//         else {
//             res.send("Data inserted");
//         }
//     });
// });
// router.delete('/todo/:id', function (req, res) {
//     var objectId = mongoose.Types.ObjectId(req.params.id);
//     console.log(objectId, req.params.id)
//     ProductUserModel.deleteOne({ _id: objectId },
//         function (err, data) {
//             if (err) {
//                 console.error(err);
//             } else {
//                 res.send(data);
//             }
//         });
// });

// module.exports = router;
