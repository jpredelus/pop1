'use strict';

angular.module('paquetApp', ['paquetApp.auth', 'paquetApp.admin', 'paquetApp.home','paquetApp.constants',
    'ngCookies', 'ngResource', 'ngSanitize', 'btford.socket-io', 'ui.router',
    'validation.match', 'ngMaterial'
  ])
  .config(function($urlRouterProvider, $locationProvider, $mdIconProvider) {
    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(true);
    $mdIconProvider.iconSet('brand:logo', './assets/images/ANZUG_LOGO.svg', 48);
    

  })
  .run(function($rootScope) {
    $rootScope.$on('$stateChangeSuccess', function(event, state, params) {
        $rootScope.stateName = state.name;
    });
  });
