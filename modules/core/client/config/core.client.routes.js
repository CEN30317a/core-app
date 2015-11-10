'use strict';

// Setting up route
angular.module('core').config(['$stateProvider', '$urlRouterProvider',
  function ($stateProvider, $urlRouterProvider) {

    // Redirect to 404 when route not found
    $urlRouterProvider.otherwise(function ($injector, $location) {
      $injector.get('$state').transitionTo('not-found', null, {
        location: false
      });
    });

    // Home state routing
      // When creating new routes make sure the url: has a field or your will not be able to access it
    $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'modules/core/client/views/home.client.view.html'
    })
    .state('careers', {
      url: '/careers',
      templateUrl: 'modules/core/client/views/careers.client.view.html'
    })
    .state('about', {
      url: '/about',
      templateUrl: 'modules/core/client/views/about.client.view.html'
    })
    .state('services', {
      url: '/services',
      templateUrl: 'modules/core/client/views/services.client.view.html'
    })
    .state('packages', {
      url: '/packages',
      templateUrl: 'modules/core/client/views/packages.client.view.html'
    })
    .state('login', {
      url: '/login',
      templateUrl: 'modules/core/client/views/login.client.view.html'
    })
    .state('not-found', {
      url: '/not-found',
      templateUrl: 'modules/core/client/views/404.client.view.html',
      data: {
        ignoreState: true
      }
    })
    .state('bad-request', {
      url: '/bad-request',
      templateUrl: 'modules/core/client/views/400.client.view.html',
      data: {
        ignoreState: true
      }
    })
    .state('forbidden', {
      url: '/forbidden',
      templateUrl: 'modules/core/client/views/403.client.view.html',
      data: {
        ignoreState: true
      }
    });
  }
]);
