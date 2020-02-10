var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');

/* GET users listing. */
router.post('/login', function(req, res, next) {
  // if the username and password exactly match
  const username = req.body.username
  // generate token for 1 hour
  const token = jwt.sign({ 
    exp: Math.floor(Date.now() / 1000) + (60 * 60),
    username: username
    // this 'wiefoiwniubcwb782223' is secret key. You should store it in env
  }, 'wiefoiwniubcwb782223');
  res.json({
    token: token
  })
});

router.post('/profile', function(req, res, next) {
  // if the username and password exactly match
  res.send('profile')
});

module.exports = router;
