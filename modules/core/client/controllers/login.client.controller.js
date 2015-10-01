'use strict';

var express = require('express'),
    router = express.Router(),
    passport = require('passport');
    User = require('../models/user.js');


router.post('/register', function(req, res) {
  User.register(new User({ username: req.body.username }), req.body.password, function(err, account) {
    if (err) {
      return res.status(500).json({err: err})
    }
    passport.authenticate('local')(req, res, function () {
      return res.status(200).json({status: 'Registration successful!'})
    });
  });
});


angular.module('core').controller('LoginController', ['$scope',
                /*'Authentication',*/
              	//function ($scope, Authentication) {
                	// This provides Authentication context.
                	//scope.authentication = Authentication;
    function ($scope) {
      $scope.usernameField = "";
      $scope.passwordField = "";

      $scope.login = function(usernameField, passwordField) {
        console.log("Pressed Submit");
          router.post('/register', function(req, res) {
            User.register(new User({ username: req.body.username }), req.body.password, function(err, account) {
              if (err) {
                return res.status(500).json({err: err})
              }
              passport.authenticate('local')(req, res, function () {
                return res.status(200).json({status: 'Registration successful!'})
              });
            });
          });
      }
    }
]);
