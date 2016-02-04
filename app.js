var express = require ('express');
var app = express();

app.use("/special/", function(req, res, next){
	console.log("You've reached the special area.");
	next();
})

app.use(function(req, res, next){
	console.log(req.method, req.url, res.statusCode);
	next();
});

app.get('/', function(req, res){
	res.send("Welcome");
});

app.listen(3000, function(){
	console.log("App listening on port 3000");
});