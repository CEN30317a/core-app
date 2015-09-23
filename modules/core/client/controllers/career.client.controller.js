'use strict';

angular.module('core').controller('CareersController', ['$scope',
  	function ($scope) {

  		$scope.careerApplicationVisible = false;

    	$scope.openCareerApplication = function() {
			$scope.careerApplicationVisible = true;
		};

	 	$scope.closeCareerApplication = function() {
			$scope.careerApplicationVisible = false;
		};
  	}
]);
