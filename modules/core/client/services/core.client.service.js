'use strict';

//Articles service used for communicating with the articles REST endpoints
angular.module('jobs').factory('Jobs', ['$resource',
  function ($resource) {
    return $resource('api/job/:jobId', {
      articleId: '@_id'
    }, {
      update: {
        method: 'GET'
      }
    });
  }
]);

angular.module('contacts').factory('Contacts', ['$resource',
  function ($resource) {
    return $resource('api/contacts/:contactId', {
      articleId: '@_id'
    }, {
      update: {
        method: 'PUT'
      }
    });
  }
]);
