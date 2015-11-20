'use strict';

// Setting up route
angular.module('contacts').config(['$stateProvider',
  function ($stateProvider) {
    // Contacts state routing
    $stateProvider
      .state('contacts', {
        abstract: true,
        url: '/admin/contacts',
        template: '<ui-view/>',
        data:{
          roles:['admin']
        }
      })
      .state('contacts.list', {
        url: '',
        templateUrl: 'modules/users/client/views/admin/list-contacts.client.view.html'
      })
      .state('contacts.view', {
        url: '/:contactId',
        templateUrl: 'modules/users/client/views/admin/view-contact.client.view.html'
      })
      .state('contacts.edit', {
        url: '/:contactId',
        templateUrl: 'modules/users/client/views/admin/view-contact.client.view.html',
        data: {
          roles: ['admin']
        }
      });
  }
]);
