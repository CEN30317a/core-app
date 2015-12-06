'use strict';

//JobApps service used for communicating with the jobApps REST endpoints
angular.module('jobApps').factory('JobApps', ['$resource',
  function ($resource) {
    return $resource('api/jobApps/:jobAppId', {
      jobAppId: '@_id'
    }, {
      update: {
        method: 'PUT'
      }
    });
  }
]);
