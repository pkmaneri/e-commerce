var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');
var mongoose = require('mongoose');
const fs = require('fs')

// Connecting to database
var db = 'mongodb://localhost:27017/mss_db'

if (process.env.NODE_ENV && process.env.NODE_ENV.trim() == 'PROD') {
  app.use(express.static("client/build"))
}


console.log("mongo => ", db)
mongoose.Promise = global.Promise;

mongoose.connect(db, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, function (error) {
  if (error) {
    console.log("Error!" + error);
  }
});


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var todoRouter = require('./routes/todos');
var categoryRouter = require('./routes/category');
var bookTitleRouter = require('./routes/book');
var authorRouter = require('./routes/author');
var publisherRouter = require('./routes/publisher');
var imageRouter = require('./routes/image');
var languageRouter = require('./routes/language');
var cartRouter = require('./routes/cart');
var userRouter = require('./routes/user');
var roleRouter = require('./routes/role');
var authRouter = require('./routes/auth');
var currenyRouter = require('./routes/currency');
var countryRouter = require('./routes/country');
var genderRouter = require('./routes/gender');
var organisationRouter = require("./routes/organisation")
var productRouter = require('./routes/product');
var mycartRouter = require('./routes/mycart');
var myorderRouter = require('./routes/myorder');
var venderRouter = require('./routes/vender');
var productUserRouter = require('./routes/productuser');





var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');


app.use(logger('dev'));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: false, limit: '50mb' }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/v1', todoRouter);
app.use('/v1', categoryRouter);
app.use('/v1', bookTitleRouter);
app.use('/v1', authorRouter);
app.use('/v1', publisherRouter);
app.use('/v1', imageRouter);
app.use('/v1', cartRouter);
app.use('/v1', languageRouter);
app.use('/v1', userRouter);
app.use('/v1', roleRouter);
app.use('/v1', authRouter);
app.use('/v1', currenyRouter);
app.use('/v1', countryRouter);
app.use('/v1', genderRouter);
app.use('/v1', organisationRouter);
app.use('/v1', venderRouter);
app.use('/v1', productRouter);
app.use('/v1', mycartRouter);
app.use('/v1', myorderRouter);
app.use('/v1', productUserRouter);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

var port = process.env.PORT || '4000';
app.set('port', port);




module.exports = app;
app.listen(port,()=>{
  console.log(`listning to the app ${port}`)
})
