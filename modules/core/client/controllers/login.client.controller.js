'use strict';
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
      };
    }
]);
