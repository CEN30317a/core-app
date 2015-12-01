'use strict';

angular.module('core').controller('HomeController', ['$scope', '$rootScope', '$location', 'Contacts', /*'Authentication',*/
              	//function ($scope, Authentication) {
                	// This provides Authentication context.
                	//scope.authentication = Authentication;

    function ($scope, $rootScope, $location, Contacts) {


        $scope.submitContactForm = function() {
          // Create new Contact object
          var contact = new Contacts({
            name: this.name,
            email: this.email,
            message: this.message,
          });

          // Redirect after save
          contact.$save(function (response) {
            
            // Clear form fields
            $scope.name = '';
            $scope.email = '';
            $scope.message = '';
          }, function (errorResponse) {
            $scope.error = errorResponse.data.message;
          });
        };

        // Remove existing Contact
        $scope.remove = function (contact) {
          if (contact) {
            contact.$remove();

            for (var i in $scope.contacts) {
              if ($scope.contacts[i] === contact) {
                $scope.contacts.splice(i, 1);
              }
            }
          } else {
            $scope.contact.$remove(function () {
              $location.path('admin/contacts');
            });
          }
        };
      }
]);
