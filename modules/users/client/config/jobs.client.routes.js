'use strict';

// Setting up route
angular.module('jobs').config(['$stateProvider',
  function ($stateProvider) {
    // Jobs state routing
    $stateProvider
      .state('jobs', {
        abstract: true,
        url: '/admin/jobs',
        template: '<ui-view/>',
        data:{
          roles:['admin']
        }
      })
      .state('jobs.list', {
        url: '',
        templateUrl: 'modules/users/client/views/admin/list-jobs.client.view.html'
      })
      .state('jobs.create', {
        url: '/create',
        templateUrl: 'modules/users/client/views/admin/create-job.client.view.html',
        data: {
          roles: ['admin']
        }
      })
      .state('jobs.view', {
        url: '/:jobId',
        templateUrl: 'modules/users/client/views/admin/view-job.client.view.html'
      })
      .state('jobs.edit', {
        url: '/:jobId/edit',
        templateUrl: 'modules/users/client/views/admin/edit-job.client.view.html',
        data: {
          roles: ['admin']
        }
      });
  }
]);
