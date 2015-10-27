'use strict';

angular.module('core').controller('CareersController', ['$scope', '$filter', '$rootScope', 'Jobs',

    function ($scope, $filter, $rootScope, Jobs) {

        $scope.Jobs = [];
        $scope.itemsPerPage = 15;
        $scope.currentPage = 1;
        $scope.pagedItems = [];
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

        $scope.figureOutItemsToDisplay = function () {
          $scope.filteredItems = $filter('filter')($scope.Jobs, {
            $: $scope.search
          });
          $scope.filterLength = $scope.filteredItems.length;
          var begin = (($scope.currentPage - 1) * $scope.itemsPerPage);
          var end = begin + $scope.itemsPerPage;
          $scope.pagedItems = $scope.filteredItems.slice(begin, end);
        };

        $scope.pageChanged = function () {
          $scope.figureOutItemsToDisplay();
        };

  	}]);
