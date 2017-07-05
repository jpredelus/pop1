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
        url: '/product/:name/:productId',
        views: {
          '@': {component: 'product'}
        }
      })
      .state('checkout', {
        parent: 'store',
        url: '/checkout',
        views: {
          '@': {
            templateUrl: 'app/store/checkout/views/checkout.html',
            controller: 'CheckoutController',
            controllerAs: 'ctrl'
          }
        }
      })
      .state('404', {
        parent: 'store',
        url:'',
        views: {
          '@': {templateUrl: 'app/404.html'}
        }
      });
  });
