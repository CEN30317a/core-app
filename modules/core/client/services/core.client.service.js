'use strict';

//Articles service used for communicating with the articles REST endpoints
angular.module('jobs').factory('Jobs', ['$resource',
  function ($resource) {
    return $resource('api/jobs/:jobId', {
      articleId: '@_id'
    }, {
      update: {
        method: 'GET'
      }
    });
  }
]);
