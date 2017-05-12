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
      })
      .state('product', {
        parent: 'store',
        url: '/product/:productId',
        views: {
          '@': {component: 'product'}
        }
      });
  });
