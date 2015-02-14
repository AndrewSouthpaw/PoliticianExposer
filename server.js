(function(){

  'use strict';
  var express = require('express');
  var reloader = require('connect-livereload')
  var app = express();



  app.use(reloader());
  app.use(express.static('./client'));

  var port = process.env.PORT || 9000;
  app.listen(port, function(){
    console.log('App Listening on localhost:9000');
  });

})();