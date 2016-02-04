var express = require('express');
var router = express.Router();
var tweetBank = require('../tweetBank');

//Test Tweet
tweetBank.add("Scott", "New Tweet");

router.get('/', function (req, res) {
  var tweets = tweetBank.list();
  res.render( 'index', { title: 'Twitter.js', tweets: tweets } );
});

router.get('/users/:name', function(req, res) {
  var name = req.params.name;
  var list = tweetBank.find( {name: name} );
  res.render( 'index', { title: 'Twitter.js - Posts by ' + name, tweets: list } );
});

module.exports = router;