'use strict';

//Referrals service used for communicating with the referrals REST endpoints
angular.module('referrals').factory('Referrals', ['$resource',
  function ($resource) {
    return $resource('api/referrals/:referralId', {
      referralId: '@_id'
    }, {
      update: {
        method: 'PUT'
      }
    });
  }
]);
