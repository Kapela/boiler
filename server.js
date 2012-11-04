require('coffee-script');

var express = require('express'),
stylus = require('stylus');

require('express-namespace');

var app = express();

// Configuration

app.set('view engine', 'jade');

app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(require('connect-assets')());
app.use(app.router);

server = app.listen(app.settings.port);
console.log("Express server listening on port %d in %s mode", app.settings.port, app.settings.env);
