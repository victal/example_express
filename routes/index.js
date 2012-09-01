
/*
 * GET home page.
 */

var express = require('express')
  , home = require('./home');


module.exports = function(parent){
  var app = express();
  app.set('views', __dirname + '/../views');
  app.use(express.bodyParser());
  app.post('/sandbox/:id/run',home.run);
  app.get('/sandbox/:id',home.sandbox);
  app.get('/sandbox',function(req, res){res.redirect('/sandbox/1')});
  app.get('/',home.home_view);

  parent.use(app);
}

