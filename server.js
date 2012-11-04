require('coffee-script');

var express = require('express'),
stylus = require('stylus');

require('express-namespace');

var app = express();

// Configuration

app.set('view engine', 'jade');
app.set('port', 3000);


app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(require('connect-assets')());
app.use(express.static(__dirname + '/public'));
app.use(app.router);

app.configure('development', function () {
  app.use(express.errorHandler({
    dumpExceptions: true,
    showStack: true
  }));
});

app.configure('test', function (){
  app.set('port', 3001);
});

app.configure('production', function (){
  app.use(express.errorHandler());
});




server = app.listen(app.settings.port);
console.log("Express server listening on port %d in %s mode", app.settings.port, app.settings.env);
