'use strict';

angular.module('core').controller('HeaderController', ['$scope', '$rootScope', /*'$state', 'Authentication', 'Menus',*/
                            //function ($scope , $state, Authentication, Menus) {
    function ($scope, $rootScope) {
                            // Expose view variables
                            //$scope.$state = $state;
                            //$scope.authentication = Authentication;
        $scope.signInVisible = false;

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
            $scope.signInVisible = true;
        };

        $scope.closeSignIn = function() {
            $scope.signInVisible = false;
        };

        $scope.openContactForm = function() {
            $rootScope.contactFormVisible = true;
        };

        $scope.closeContactForm = function() {
            $rootScope.contactFormVisible = false;
        };
    }
]);

// $('body').on('click', '.button-collapse', function() {
//     if ($('#nav-mobile').css('left') === '0px') {
//         $('#nav-mobile').css('left', '105%');
//     }
//     else {
//         $('#nav-mobile').css('left', '0px');
//     }
// });
