'use strict';

angular.module('paquetApp', ['paquetApp.auth', 'paquetApp.admin', 'paquetApp.home','paquetApp.store','paquetApp.constants',
    'ngCookies', 'ngResource', 'ngSanitize', 'ngAnimate', 'btford.socket-io', 'ui.router',
    'validation.match', 'ngMaterial','ngMessages','mockStore'
  ])
  .config(function($urlRouterProvider, $locationProvider, $mdIconProvider, $mdThemingProvider) {
    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(true);
    $mdThemingProvider.theme('default')
    .accentPalette('red', {
            'default': '900'

    })
    .primaryPalette('pink', {
        'default': '700'
    });
    //Setting svg icon sets
    $mdIconProvider.iconSet('brand:logo', './assets/SVGS/ANZUG_LOGO.svg', 48);
    $mdIconProvider.iconSet('brand:suit', './assets/SVGS/SUIT.svg', 48);
    $mdIconProvider.iconSet('brand:suit-trans', './assets/SVGS/SUIT-TRANSPARENT.svg', 48);
    $mdIconProvider
        .defaultIconSet('./assets/SVGS/iconsets/extendedmdi-icons.svg', 24)
        .iconSet('mdi', './assets/SVGS/iconsets/mdi-icons.svg', 24)
        .iconSet('action', './assets/SVGS/iconsets/action-icons.svg', 24)
        .iconSet('alert', './assets/SVGS/iconsets/alert-icons.svg', 24)
        .iconSet('av', './assets/SVGS/iconsets/av-icons.svg', 24)
        .iconSet('communication', './assets/SVGS/iconsets/communication-icons.svg', 24)
        .iconSet('content', './assets/SVGS/iconsets/content-icons.svg', 24)
        .iconSet('device', './assets/SVGS/iconsets/device-icons.svg', 24)
        .iconSet('editor', './assets/SVGS/iconsets/editor-icons.svg', 24)
        .iconSet('file', './assets/SVGS/iconsets/file-icons.svg', 24)
        .iconSet('hardware', './assets/SVGS/iconsets/hardware-icons.svg', 24)
        .iconSet('image', './assets/SVGS/iconsets/image-icons.svg', 24)
        .iconSet('maps', './assets/SVGS/iconsets/maps-icons.svg', 24)
        .iconSet('navigation', './assets/SVGS/iconsets/navigation-icons.svg', 24)
        .iconSet('notification', './assets/SVGS/iconsets/notification-icons.svg', 24)
        .iconSet('social', './assets/SVGS/iconsets/social-icons.svg', 24)
        .iconSet('toggle', './assets/SVGS/iconsets/toggle-icons.svg', 24);
    

  })
  .run(function($rootScope) {
    $rootScope.$on('$stateChangeSuccess', function(event, state, params) {
        $rootScope.stateName = state.name;
    });
  });
