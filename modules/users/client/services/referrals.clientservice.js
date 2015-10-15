'use strict';

//Jobs service used for communicating with the referrals REST endpoints
angular.module('referrals').factory('referrals', ['$resource',
  function ($resource) {
    return $resource('api/referrals/:referralID', {
      referralID: '@_id'
    }, {
      update: {
        method: 'PUT'
      }
    });
  }
]);
