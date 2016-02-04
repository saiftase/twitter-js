var express = require('express');
var router = express.Router();
var tweetBank = require('../tweetBank');

//Test Tweet
tweetBank.add("Scott", "New Tweet");

router.get('/', function (req, res) {
  var tweets = tweetBank.list();
  res.render( 'index', { title: 'Twitter.js', tweets: tweets, showForm: true} );
});

router.get('/users/:name', function(req, res) {
  var name = req.params.name;
  var list = tweetBank.find( {name: name} );
  res.render( 'index', { title: 'Twitter.js - Posts by ' + name, tweets: list, showForm: true, name: name} );
});

router.get('/tweets/:id', function(req, res){
	var id = parseInt(req.params.id);
	var tweet = tweetBank.find( {id:id} );
	res.render( 'index', { title: 'Twitter.js - Post ID:' + id, tweets: tweet } );
});

router.post('/tweets', function(req, res) {
  var name = req.body.name;
  var text = req.body.text;
  tweetBank.add(name, text);
  res.redirect('/');
});


module.exports = router;