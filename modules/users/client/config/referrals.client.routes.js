'use strict';

// Setting up route
angular.module('referrals').config(['$stateProvider',
  function ($stateProvider) {
    // Referrals state routing
    $stateProvider
      .state('referrals', {
        abstract: true,
        url: '/referrals',
        template: '<ui-view/>',
        data:{
          roles:['admin', 'user']
        }
      })

      //safetyNet
      .state('referrals.safetyNet', {
        url: '/',
        templateUrl: 'modules/users/client/views/employees/list-referrals.client.view.html',
      })

      //Both Users
      .state('referrals.list', {
        url: '',
        templateUrl: 'modules/users/client/views/employees/list-referrals.client.view.html',
        data: {
          roles: ['admin', 'user']
        }
      })
      //AdminViews
      .state('referrals.create', {
        url: '/create',
        templateUrl: 'modules/users/client/views/admin/create-referral.client.view.html',
        data: {
          roles: ['admin']
        }
      })
      .state('referrals.view', {
        url: '/:referralId',
        templateUrl: 'modules/users/client/views/admin/view-referral.client.view.html',
        data: {
          roles: ['admin']
        }
      })
      .state('referrals.edit', {
        url: '/:referralId/edit',
        templateUrl: 'modules/users/client/views/admin/edit-referral.client.view.html',
        data: {
          roles: ['admin']
        }
      });
  }
]);
