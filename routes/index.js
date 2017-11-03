var express = require('express');
var router = express.Router();
var request = require('request');

/* GET home page. */
router.get('/', function(req, res) {
  res.sendFile('index.html', { root: 'public' });
});


var chuckNorrisJokes = "http://api.icndb.com/jokes/random";
router.get('/chuckjokes', function(req,res) {
  console.log("In Ron Jokes");
  request(chuckNorrisJokes).pipe(res);
});

module.exports = router;
