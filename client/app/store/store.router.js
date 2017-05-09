'use strict';

angular.module('paquetApp.store')
  .config(function ($stateProvider) {
    $stateProvider
      .state('store', {
        parent: 'root',
        url: '/store',
        views: {
            '@': {component: 'store'},
            'navbar@': {component: 'shopNavbar'}
        }
      });
  });
