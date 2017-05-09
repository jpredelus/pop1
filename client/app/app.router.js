'use strict';

angular.module('paquetApp')
  .config(function($stateProvider) {
    $stateProvider.state('root', {
      abstract: true,
      views: {
        '': {
            component: 'navbar'
        },
        'navbar': {
            component: 'navbar'
        }
      }
    });
  });