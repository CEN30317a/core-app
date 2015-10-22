'use strict';

// Referrals controller
angular.module('referrals').controller('ReferralsController', ['$scope', '$stateParams', '$location', 'Authentication', 'Referrals',
  function ($scope, $stateParams, $location, Authentication, Referrals) {
    $scope.authentication = Authentication;

    // Create new Referral
    $scope.create = function (isValid) {
      $scope.error = null;

      if (!isValid) {
        $scope.$broadcast('show-errors-check-validity', 'referralForm');

        return false;
      }

      // Create new Referral object
      var referral = new Referrals({
        title: this.title,
        content: this.content,
        assigned: this.assigned
      });

      // Redirect after save
      referral.$save(function (response) {
        $location.path('referrals');

        // Clear form fields
        $scope.title = '';
        $scope.content = '';
        $scope.assigned = '';
      }, function (errorResponse) {
        $scope.error = errorResponse.data.message;
      });
    };

    // Remove existing Referral
    $scope.remove = function (referral) {
      if (referral) {
        referral.$remove();

        for (var i in $scope.referrals) {
          if ($scope.referrals[i] === referral) {
            $scope.referrals.splice(i, 1);
          }
        }
      } else {
        $scope.referral.$remove(function () {
          $location.path('employees/referrals');
        });
      }
    };

    // Update existing Referral
    $scope.update = function (isValid) {
      $scope.error = null;

      if (!isValid) {
        $scope.$broadcast('show-errors-check-validity', 'referralForm');

        return false;
      }

      var referral = $scope.referral;

      referral.$update(function () {
        $location.path('employees/referrals/' + referral._id);
      }, function (errorResponse) {
        $scope.error = errorResponse.data.message;
      });
    };

    // Find a list of Referrals
    $scope.find = function () {
      $scope.referrals = Referrals.query();
    };

    // Find existing Referral
    $scope.findOne = function () {
      $scope.referral = Referrals.get({
        referralId: $stateParams.referralId
      });
    };
  }
]);
