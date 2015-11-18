'use strict';

angular.module('core').controller('HomeController', ['$scope', '$rootScope', /*'Authentication',*/
              	//function ($scope, Authentication) {
                	// This provides Authentication context.
                	//scope.authentication = Authentication;

    function ($scope, $rootScope) {

        $scope.openContactForm = function() {
            $rootScope.contactFormVisible = true;
        };

        $scope.closeContactForm = function() {
            $rootScope.contactFormVisible = false;
        };

        $scope.submitContactForm = function() {

            // Create new Contact object
            var contact = new Contact({
              name: this.title,
              email: this.email,
              message: this.message
            });

            $scope.closeContactForm();

        };
    }
]);
