'use strict';

angular.module('paquetApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('store', {
        url: '/store',
        component: 'store'
      });
  });
