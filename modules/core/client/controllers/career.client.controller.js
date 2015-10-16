'use strict';

angular.module('core').controller('CareersController', ['$scope', '$rootScope', 'Jobs',

    function ($scope, $rootScope, Jobs) {

        $scope.Jobs = [];

        $scope.careerApplicationVisible = false;

        $scope.openCareerApplication = function() {
            $scope.careerApplicationVisible = true;
        };

        $scope.closeCareerApplication = function() {
            $scope.careerApplicationVisible = false;
        };

        $scope.openContactForm = function() {
            $rootScope.contactFormVisible = true;
        };

        $scope.closeContactForm = function() {
            $rootScope.contactFormVisible = false;
        };

        $scope.find = function() {
          $scope.Jobs = Jobs.query();
        };

  	}]);
