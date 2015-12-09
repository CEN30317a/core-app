'use strict';

// Jobs controller
angular.module('jobs').controller('JobsController', ['$scope', '$stateParams', '$location', 'Authentication', 'Jobs',
  function ($scope, $stateParams, $location, Authentication, Jobs) {
    $scope.authentication = Authentication;

    // Create new Job
    $scope.create = function (isValid) {
      $scope.error = null;

      // Create new Job object
      var job = new Jobs({
        title: this.title,
        description: this.description,
        contract: this.contract,
        closing: this.closing,
        minExp1: this.minExp1,
        minExp2: this.minExp2,
        minExp3: this.minExp3,
        minExp4: this.minExp4,
        minExp5: this.minExp5,
        prefExp1: this.prefExp1,
        prefExp2: this.prefExp2,
        prefExp3: this.prefExp3,
        prefExp4: this.prefExp4,
        prefExp5: this.prefExp5,
        responsibilities: this.responsibilities,
        salary: this.salary
      });

      // Redirect after save
      job.$save(function (response) {
        $location.path('admin/jobs');

        // Clear form fields
        $scope.title = '';
        $scope.description = '';
        $scope.contract = '';
        $scope.closing = '';
        $scope.minExp1 = '';
        $scope.minExp2 = '';
        $scope.minExp3 = '';
        $scope.minExp4 = '';
        $scope.minExp5 = '';
        $scope.prefExp1 = '';
        $scope.prefExp2 = '';
        $scope.prefExp3 = '';
        $scope.prefExp4 = '';
        $scope.prefExp5 = '';
        $scope.responsibilities = '';
        $scope.salary = '';
      }, function (errorResponse) {
        $scope.error = errorResponse.data.message;
      });
    };

    // Remove existing Job
    $scope.remove = function (job) {
      if (job) {
        job.$remove();

        for (var i in $scope.jobs) {
          if ($scope.jobs[i] === job) {
            $scope.jobs.splice(i, 1);
          }
        }
      } else {
        $scope.job.$remove(function () {
          $location.path('admin/jobs');
        });
      }
    };

    // Update existing Job
    $scope.update = function (isValid) {
      $scope.error = null;

      if (!isValid) {
        $scope.$broadcast('show-errors-check-validity', 'jobForm');

        return false;
      }

      var job = $scope.job;

      job.$update(function () {
        $location.path('admin/jobs/' + job._id);
      }, function (errorResponse) {
        $scope.error = errorResponse.data.message;
      });
    };

    // Find a list of Jobs
    $scope.find = function () {
      $scope.jobs = Jobs.query();
    };

    // Find existing Job
    $scope.findOne = function () {
      $scope.job = Jobs.get({
        jobId: $stateParams.jobId
      });
    };
  }
]);
