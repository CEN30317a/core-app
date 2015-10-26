'use strict';

angular.module('core').controller('HeaderController', ['$scope', '$state', 'Authentication', '$rootScope', 
    function ($scope, $state, Authentication, $rootScope) {
        // Expose view variables
        $scope.$state = $state;
        $scope.authentication = Authentication;
        $rootScope.signInVisible = false;
        $rootScope.mobileMenuVisible = false;

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

        $scope.getHighestRole = function() {
            var roles;
            if ($scope.authentication.user && $scope.authentication.user.roles) {
                
                roles = $scope.authentication.user.roles;

                if (roles.indexOf('admin') !== -1) {
                    return 'admin';
                } else if (roles.indexOf('user') !== -1) {
                    return 'user';
                }

                return '';
            }
                
            return '';
        };
    }
]);
