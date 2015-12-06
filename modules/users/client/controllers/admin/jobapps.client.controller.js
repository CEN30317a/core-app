'use strict';

// JobApps controller
angular.module('jobApps').controller('JobAppsController', ['$scope', '$stateParams', '$location', 'Authentication', 'JobApps',
  function ($scope, $stateParams, $location, Authentication, JobApps) {
    $scope.authentication = Authentication;

    var jobApp = $scope.jobApp;

    // Find a list of JobApps
    $scope.find = function () {
      $scope.jobApps = JobApps.query();
    };

    // Find existing JobApp
    $scope.findOne = function () {
      $scope.jobApp = JobApps.get({
        jobAppId: $stateParams.jobAppId
      });
    };

    // Remove existing JobApp
    $scope.remove = function (jobApp) {
      if (jobApp) {
        jobApp.$remove();

        for (var i in $scope.jobApps) {
          if ($scope.jobApps[i] === jobApp) {
            $scope.jobApps.splice(i, 1);
          }
        }
      } else {
        $scope.jobApp.$remove(function () {
          $location.path('admin/jobApps');
        });
      }
    };

    // Update existing JobApp
    $scope.update = function (isValid) {
      $scope.error = null;

      if (!isValid) {
        $scope.$broadcast('show-errors-check-validity', 'jobAppForm');

        return false;
      }

      var jobApp = $scope.jobApp;

      jobApp.$update(function () {
        $location.path('admin/jobApps/' + jobApp._id);
      }, function (errorResponse) {
        $scope.error = errorResponse.data.message;
      });
    };
  }
]);
