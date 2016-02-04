var express = require ('express');
var app = express();
var swig = require('swig');
var routes = require('./routes')
var bodyParser = require('body-parser');

app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
swig.setDefaults({cache: false});

//Logging
app.use(function(req, res, next){
	console.log(req.method, req.url, res.statusCode);
	next();
});

//Parsing
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

//Static & Dynamic Routes
app.use(express.static('public'));
app.use('/', routes);

/*
app.get('/', function(req, res){
	var people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];
	res.render( 'index', {title: 'Hall of Fame', people: people} );
	// res.send("Welcome");
});
*/

app.listen(3000, function(){
	console.log("App listening on port 3000");
});