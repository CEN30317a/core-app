'use strict';

angular.module('core').controller('CareersController', ['$scope', '$rootScope',

    function ($scope, $rootScope) {


        $scope.Jobs = ["Job1", "Job2", "Job3"];

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

  	}
]);
