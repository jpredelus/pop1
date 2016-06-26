'use strict';

angular.module('paquetApp.auth', ['paquetApp.constants', 'paquetApp.util', 'ngCookies',
    'ui.router'
  ])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
