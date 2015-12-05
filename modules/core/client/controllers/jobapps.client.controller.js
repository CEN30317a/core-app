'use strict';

// Jobs controller
angular.module('jobapps').controller('JobAppsController', ['$scope', '$stateParams', '$location', 'JobApps',
  function ($scope, $stateParams, $location, Jobs) {

    // Create new Job
    $scope.create = function (isValid) {
      $scope.error = null;

      if (!isValid) {
        $scope.$broadcast('show-errors-check-validity', 'jobAppForm');

        return false;
      }

      // Create new Job object
      var job = new Jobs({
        first_name: this.first_name,
        last_name: this.last_name,
        email: this.email,
        phone: this.phone,
        street_address: this.street_address,
        apt_number: this.apt_number,
        city: this.city,
        state: this.state,
        zip_code: this.zip_code,
        pt: this.pt,
        ft: this.ft,
        textarea1: this.textarea1,
      });

      job.$save(function (response) {

        // Clear form fields
        $scope.first_name = '';
        $scope.last_name = '';
        $scope.email = '';
        $scope.phone = '';
        $scope.street_address = '';
        $scope.apt_number = '';
        $scope.city = '';
        $scope.state = '';
        $scope.zip_code = '';
        $scope.pt = '';
        $scope.ft = '';
        $scope.textarea1 = '';
      }, function (errorResponse) {
        $scope.error = errorResponse.data.message;
      });
    };
  }
]);
