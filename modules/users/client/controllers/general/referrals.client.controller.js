'use strict';

// Referrals controller
angular.module('referrals').controller('ReferralsController', ['$scope', '$filter', '$stateParams', '$location', 'Authentication', 'Referrals', 'Admin',
  function ($scope, $filter ,$stateParams,$location, Authentication, Referrals, Admin) {
    $scope.authentication = Authentication;
    $scope.isAdmin  = (Authentication.user.roles[0] === "admin") ? true : false;
    $scope.selectedUser = "";

    //get users
    if($scope.isAdmin){
      Admin.query(function (data) {
        $scope.usersList = data; // callback for Users.query
        $scope.pagedItems = [];
        console.log(data);
      });
    }

    $scope.selectUser = function(myUser){
      console.log(myUser);
      $scope.selectedUser = myUser;
    };

    $scope.assignedTo = function(user) {
      if(user === $scope.selectedUser){
        return true;
      } else {
        return false;
      }
    };

    $scope.figureOutItemsToDisplay = function () {
      $scope.filteredItems = $filter('filter')($scope.users, {
        $: $scope.search
      });
      $scope.filterLength = $scope.filteredItems.length;
    };


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
        assigned: $scope.selectedUser.username,
        locate: this.locate,
        dateVisit: this.dateVisit,
        contactClient: this.contactClient,
        description: this.description,
        history: this.history,
        comments: this.comments,
      });

      // Redirect after save
      referral.$save(function (response) {
        $location.path('referrals');

        // Clear form fields
        $scope.title = '';
        $scope.assigned = '';
        $scope.locate = '';
        $scope.dateVisit = '';
        $scope.contactClient = '';
        $scope.description = '';
        $scope.history = '';
        $scope.comments = '';
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
          $location.path('referrals');
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
        $location.path('referrals/' + referral._id);
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

    $scope.displayReferral = function(referral) {
        if(referral.assigned === $scope.authentication.user.username || $scope.isAdmin){
          return true; // displayReferral
        } else {
          return false; // hide
        }
    };

    $scope.getHighestRole = function() {
        var roles;
        if ($scope.authentication.user && $scope.authentication.user.roles) {

            roles = $scope.authentication.user.roles;

            if (roles.indexOf('admin') !== -1) {
                return 'admin';
            } else if (roles.indexOf('user') !== -1) {
                return 'user';
            }

            return '';
        }

        return '';
    };
  }
]);
