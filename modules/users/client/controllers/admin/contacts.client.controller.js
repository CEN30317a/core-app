'use strict';

// Contacts controller
angular.module('contacts').controller('ContactsController', ['$scope', '$stateParams', '$location', 'Authentication', 'Contacts',
  function ($scope, $stateParams, $location, Authentication, Contacts) {
    $scope.authentication = Authentication;

    var contact = $scope.contact;

    // Find a list of Contacts
    $scope.find = function () {
      $scope.contacts = Contacts.query();
    };

    // Find existing Contact
    $scope.findOne = function () {
      $scope.contact = Contacts.get({
        contactId: $stateParams.contactId
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

    // Update existing Contact
    $scope.update = function (isValid) {
      $scope.error = null;

      console.log("Here!")
      if (!isValid) {
        $scope.$broadcast('show-errors-check-validity', 'contactForm');

        return false;
      }

      var contact = $scope.contact;

      contact.$update(function () {
        $location.path('admin/contacts/' + contact._id);
      }, function (errorResponse) {
        $scope.error = errorResponse.data.message;
      });
    };
  }
]);
