#!/usr/bin/env node

/**
 * Module dependencies.
 */

var app = require('../app');

var debug = require('debug')('server:server');

var http = require('http');


/**
 * Get port from environment and store in Express.
 */

var port = normalizePort(process.env.PORT || '4000');
app.set('port', port);

/**
 * Create HTTP server.
 */

var server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  
  console.log('Listening on ' + bind);
  loadMetaData();

}

function loadMetaData() {

  var category = require('../metadata/category');
  var CategoryModel = require('../schema/categoryschema');
  var languages = require('../metadata/language');
  var LanguageModel = require('../schema/languageschema');
  var Currency = require('../metadata/currency');
  var CurrencyModel = require('../schema/currencyschema');
  var Country = require('../metadata/country');
  var CountryModel = require('../schema/countryschema');
  var Role = require('../metadata/role');
  var RoleModel = require('../schema/roleschema');
  var Gender = require('../metadata/gender');
  var GenderModel = require('../schema/genderschema');



  function loadRole() {
    console.log('----------- Role load Meta Data start ------------');

    Role.forEach((c)=>{
      var newRole = new RoleModel();
      newRole.roleName = c.roleName ;
      newRole._id = c._id ;

      newRole.save( (err, data) => {
          if (err) {
              console.log(error);
          }
      });
    })

    console.log('----------- Role load Meta Data End ------------');
  
  }

  function loadGender() {
    console.log('----------- Gender load Meta Data start ------------');

    Gender.forEach((c)=>{
      var newGender = new GenderModel();
      newGender.genderName = c.genderName ;
      newGender._id = c._id ;

      newGender.save( (err, data) => {
          if (err) {
              console.log(error);
          }
      });
    })

    console.log('----------- Gender load Meta Data End ------------');
  
  }


  function loadCurrency() {
    console.log('----------- Currency load Meta Data start ------------');

    Currency.forEach((c)=>{
      var newCurrency = new CurrencyModel();
      newCurrency.currency = c.currency ;
      newCurrency.prefix = c.prefix ;
      newCurrency.postfix = c.postfix ;
      newCurrency._id=c._id;
  
      newCurrency.save( (err, data) => {
          if (err) {
              console.log(error);
          }
      });
    })

    console.log('----------- Currency load Meta Data End ------------');
  
  }

  function loadCountry() {
    console.log('----------- Country load Meta Data start ------------');

    Country.forEach((c)=>{
      var newCountry = new CountryModel();
      newCountry.name = c.name ;
      newCountry.code = c.code ;
      newCountry.phone_code= c.phone_code
      newCountry._id= c._id,
      newCountry.available = c.available ;

  
      newCountry.save( (err, data) => {
          if (err) {
              console.log(error);
          }
      });
    })

    console.log('----------- Country load Meta Data End ------------');
  
  }
  
  function loadCategory() {
    console.log('----------- Category load Meta Data start ------------');

  
    category.forEach((c)=>{
      var newCategory = new CategoryModel();
      newCategory._id = c._id ;
      newCategory.title = c.title ;
      newCategory.categoryName = c.categoryName ;
      newCategory.link = c.link ;
      newCategory.available = c.available ;
  
      newCategory.save( (err, data) => {
          if (err) {
              console.log(error);
          }
      });
    })

    console.log('----------- Category load Meta Data End ------------');
  
  }

  
function loadLanguage() {
  

  console.log('----------- Language load Meta Data start ------------');


  languages.forEach((l)=>{
    var newLanguage = new LanguageModel();
    newLanguage.name = l.name ;
    newLanguage.code = l.code ;
    newLanguage.nativeName = l.nativeName ;
    newLanguage._id = l._id ;

    newLanguage.save( (err, data) => {
        if (err) {
            console.log(error);
        }
    });
  })
 
  console.log('----------- Language load Meta Data start ------------');

}

CategoryModel.deleteMany({}, ()=>{
  console.log("CategoryModel.deleteMany done!");
  loadCategory();
});


LanguageModel.deleteMany({}, ()=>{
  console.log("LanguageModel.deleteMany done!");
  loadLanguage();
});

CurrencyModel.deleteMany({}, ()=>{
  console.log("CurrencyModel.deleteMany done!");
  loadCurrency();
});

RoleModel.deleteMany({}, ()=>{
  console.log("RoleModel.deleteMany done!");
  loadRole();
});

CountryModel.deleteMany({}, ()=>{
  
  console.log("CountryModel.deleteMany done!");
  loadCountry();
});
GenderModel.deleteMany({}, ()=>{
  console.log("GenderModel.deleteMany done!");
  loadGender();
});

}

