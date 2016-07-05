'use strict';

angular.module('paquetApp', ['paquetApp.auth', 'paquetApp.admin', 'paquetApp.home','paquetApp.constants',
    'ngCookies', 'ngResource', 'ngSanitize', 'btford.socket-io', 'ui.router',
    'validation.match', 'ngMaterial'
  ])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(true);
  });
