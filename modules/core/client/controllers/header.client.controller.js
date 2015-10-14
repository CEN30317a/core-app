'use strict';

angular.module('core').controller('HeaderController', ['$scope', '$state', 'Authentication', '$rootScope', /* 'Menus',*/
                            //function ($scope , $state, Authentication, Menus) {
    function ($scope, $state, Authentication, $rootScope) {
        // Expose view variables
        $scope.$state = $state;
        $scope.authentication = Authentication;
        $rootScope.signInVisible = false;
        $rootScope.mobileMenuVisible = false;

                            // Get the topbar menu
                            //$scope.menu = Menus.getMenu('topbar');

                            // Toggle the menu items
                            //$scope.isCollapsed = false;
                            //$scope.toggleCollapsibleMenu = function () {
                              //$scope.isCollapsed = !$scope.isCollapsed;
                            //};

                            // Collapsing the menu after navigation
                            //$scope.$on('$stateChangeSuccess', function () {
                              //$scope.isCollapsed = false;
                            //});
        $scope.openSignIn = function() {
            $rootScope.signInVisible = true;
        };

        $scope.openContactForm = function() {
            $rootScope.contactFormVisible = true;
        };

        $scope.closeContactForm = function() {
            $rootScope.contactFormVisible = false;
        };

        $scope.toggleMobileMenu = function() {
            $rootScope.mobileMenuVisible = !$rootScope.mobileMenuVisible;
        };
    }
]);
