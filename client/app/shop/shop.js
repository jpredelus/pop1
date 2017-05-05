'use strict';

angular.module('paquetApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('shop', {
        url: '/shop',
        template: '<shop></shop>'
      });
  });
