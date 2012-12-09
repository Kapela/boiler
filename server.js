require('coffee-script');

var express = require('express'),
cons = require('consolidate'),
bootstrap = require('bootstrap-stylus'),
stylus = require('stylus');
// bootstrap = require('bootstrap'),
// fs = require('fs');

require('express-namespace');
require('express-resource');
var flash = require('connect-flash');

var app = express();

// Configuration

app.set('view engine', 'jade');
app.set('port', 3000);


app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(require('connect-assets')());
app.use(express.static(__dirname + '/public'));
app.use(app.router);

// Stylus and bootstrap added
//
// var styl = fs.readFileSync(__dirname + '/example.style', 'utf8');

// var css = stylus(styl)
  // .use(bootstrap())
  // .set('filename', 'example.styl')
  // .set('compress', true)
  // .render(function(err, css){
    // if (err) throw err;
    // console.log(css);
  // });

  function compile(str, path) {
    return stylus(str)
      .set('filename', path)
      .use(bootstrap());
  }

  app.use(stylus.middleware({
    src: __dirname + '/public',
    compile: compile
  }));

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

app.configure(function() {
  app.use(express.cookieParser('keyboard cat'));
  app.use(express.session({ cookie: { maxAge: 60000 }}));
  app.use(flash());
});

// Global helpers


// Routes
require('./app/controllers/login_controller')(app);


server = app.listen(app.settings.port);
console.log("Express server listening on port %d in %s mode", app.settings.port, app.settings.env);
