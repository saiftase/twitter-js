var express = require ('express');
var app = express();
var swig = require('swig');

app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
swig.setDefaults({cache: false});

app.use(function(req, res, next){
	console.log(req.method, req.url, res.statusCode);
	next();
});

app.get('/', function(req, res){
	var people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];
	res.render( 'index', {title: 'Hall of Fame', people: people} );
	// res.send("Welcome");
});

app.listen(3000, function(){
	console.log("App listening on port 3000");
});