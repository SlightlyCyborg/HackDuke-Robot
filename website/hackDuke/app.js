
/**
 * Module dependencies.
 */

//var controls = require('./mylibs/controls.js');
var express = require('express');
var routes = require('./routes/routes.js');
var user = require('./routes/user');
var http = require('http');
var path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3001);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/users', user.list);
app.post('/forward', routes.forward);
app.post('/backward', routes.backward);
app.post('/leftward', routes.leftward);
app.post('/rightward', routes.rightward);

//SOunds
app.get('/greetings', routes.greetings);
app.get('/play',function(req,res){
	res.render('sound')
});
//app.get('/baked', routes.baked);
//app.get('/demise', routes.demise);
//app.get('/illbeback', routes.illbeback);
//app.get('/notthedroids', routes.notthedroids);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
