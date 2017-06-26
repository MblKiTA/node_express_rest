var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var load = require('express-load');

var app = express();

load('models')
.then('controllers')
.then('routes')
.into(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

var UserService = require('./app/controllers/userService');
var Users = new UserService();

// API routes
var router = express.Router();

router.get('/', function(req, res) {
  res.json({
    message: 'Index'
  });
});

router.get('/users', function(req, res) {
  Users.list(req, res);
});

router.post('/users', function(req, res) {
  var user = req.body;
  Users.add(req, res, user);
});

// Register routes
app.use('/api', router);

app.listen(3000, function() {
  console.log('Server started...');
});
