'use strict'

var UserModel = require('../models/user');

class UserService {
  list(req, res) {
    console.log('UserService - getAll');

    UserModel.find().lean().exec(function (err, users) {
      console.log(users);
      return res.json(users);
    });
  }

  add(req, res, user) {
    console.log('UserService - add');
    UserModel.create(user);

    res.json({
      errors: [],
      message: 'added'
    });
  }
};

module.exports = UserService;
