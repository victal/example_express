
/*
 * GET home page.
 */

var express = require('express')
  , home = require('./home');


module.exports = function(parent){
  var app = express();
  app.set('views', __dirname + '/../views');

  app.get('/',home.home_view);


  parent.use(app);
}

