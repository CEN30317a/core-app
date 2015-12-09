'use strict';

angular.module('core').controller('CareersController', ['$scope', '$filter', '$rootScope', 'Jobs',

    function ($scope, $filter, $rootScope, Jobs) {
        Jobs.query(function (data) {
          $scope.Jobs = data;
          $scope.buildPager();
        });

        $scope.buildPager = function () {
          $scope.pagedItems = [];
          $scope.itemsPerPage = 15;
          $scope.currentPage = 1;
          $scope.figureOutItemsToDisplay();
        };

        $scope.openCareerApplication = function() {
            $scope.careerApplicationVisible = true;
        };

        $scope.closeCareerApplication = function() {
            $scope.careerApplicationVisible = false;
        };
        
        $scope.figureOutItemsToDisplay = function () {
          $scope.filteredItems = $filter('filter')($scope.Jobs, {
            $: $scope.search
          });
          $scope.filterLength = $scope.filteredItems.length;
          var begin = (($scope.currentPage - 1) * $scope.itemsPerPage);
          var end = begin + $scope.itemsPerPage;
          $scope.pagedItems = $scope.filteredItems.slice(begin, end);
          console.log($scope.pagedItems);
        };

        $scope.pageChanged = function () {
          $scope.figureOutItemsToDisplay();
        };

  	}]);
