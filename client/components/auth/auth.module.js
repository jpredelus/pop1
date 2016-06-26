'use strict';

angular.module('pacquetApp.auth', ['pacquetApp.constants', 'pacquetApp.util', 'ngCookies',
    'ui.router'
  ])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
