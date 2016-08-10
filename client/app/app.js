'use strict';

angular.module('paquetApp', ['paquetApp.auth', 'paquetApp.admin', 'paquetApp.home','paquetApp.constants',
    'ngCookies', 'ngResource', 'ngSanitize', 'ngAnimate', 'btford.socket-io', 'ui.router',
    'validation.match', 'ngMaterial'
  ])
  .config(function($urlRouterProvider, $locationProvider, $mdIconProvider) {
    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(true);
    $mdIconProvider.iconSet('brand:logo', './assets/SVGS/ANZUG_LOGO.svg', 48);
    $mdIconProvider.iconSet('brand:suit', './assets/SVGS/SUIT.svg', 48);
    $mdIconProvider.iconSet('brand:suit-trans', './assets/SVGS/SUIT-TRANSPARENT.svg', 48);
    

  })
  .run(function($rootScope) {
    $rootScope.$on('$stateChangeSuccess', function(event, state, params) {
        $rootScope.stateName = state.name;
    });
  });
