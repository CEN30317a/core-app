'use strict';

angular.module('core').controller('HomeController', ['$scope', /*'Authentication',*/
              	//function ($scope, Authentication) {
                	// This provides Authentication context.
                	//scope.authentication = Authentication;
    function ($scope) {

      	$scope.contactFormVisible = false;

      	$scope.openContactForm = function() {
      			$scope.contactFormVisible = true;
    		};

    	 	$scope.closeContactForm = function() {
    			   $scope.contactFormVisible = false;
    		};
    }
]);
