'use strict';

// Setting up route
angular.module('jobApps').config(['$stateProvider',
  function ($stateProvider) {
    // JobApps state routing
    $stateProvider
      .state('jobApps', {
        abstract: true,
        url: '/admin/jobApps',
        template: '<ui-view/>',
        data:{
          roles:['admin']
        }
      })
      .state('jobApps.list', {
        url: '',
        templateUrl: 'modules/users/client/views/admin/list-jobapps.client.view.html',
        data:{
          roles:['admin']
        }
      })
      .state('jobApps.view', {
        url: '/:jobAppId',
        templateUrl: 'modules/users/client/views/admin/view-jobapp.client.view.html',
        data:{
          roles:['admin']
        }
      });
  }
]);
