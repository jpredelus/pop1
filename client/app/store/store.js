'use strict';

angular.module('paquetApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('store', {
        parent: 'root',
        url: '/store',
        views: {
            '@': {
                component: 'store'
            }
        }
      });
  });
