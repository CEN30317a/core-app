'use strict';

// Setting up route
angular.module('referrals').config(['$stateProvider',
  function ($stateProvider) {
    // Referrals state routing
    $stateProvider
      .state('referrals', {
        abstract: true,
        url: '/employees/referrals',
        template: '<ui-view/>',
        data:{
          roles:['user']
        }
      })
      .state('referrals.list', {
        url: '',
        templateUrl: 'modules/users/client/views/employees/list-referrals.client.view.html'
      })
      .state('referrals.create', {
        url: '/create',
        templateUrl: 'modules/users/client/views/employees/list-referrals.client.view.html',
        data: {
          roles: ['user']
        }
      })
      .state('referrals.view', {
        url: '/:referralId',
        templateUrl: 'modules/users/client/views/employees/list-referrals.client.view.html'
      })
      .state('referrals.edit', {
        url: '/:referralId/edit',
        templateUrl: 'modules/users/client/views/employees/list-referrals.client.view.html',
        data: {
          roles: ['user']
        }
      });
  }
]);
