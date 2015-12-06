'use strict';

//Articles service used for communicating with the articles REST endpoints
angular.module('jobs').factory('Jobs', ['$resource',
  function ($resource) {
    return $resource('api/job/:jobId', {
      jobId: '@_id'
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
      contactId: '@_id'
    }, {
      update: {
        method: 'PUT'
      }
    });
  }
]);

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
