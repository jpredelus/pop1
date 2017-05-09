'use strict';

angular.module('paquetApp')
  .config(function($stateProvider) {
    $stateProvider.state('login', {
        parent: 'root',
        url: '/login',
        views:{
          '@':{
              templateUrl: 'app/account/login/login.html',
              controller: 'LoginController',
              controllerAs: 'vm'
            }
        }
      })
      .state('logout', {
        parent: 'root',
        url: '/logout?referrer',
        views: {
          '@': {
            referrer: 'main',
            template: '',
            controller: function($state, Auth) {
              var referrer = $state.params.referrer || $state.current.referrer || 'main';
              Auth.logout();
              $state.go(referrer);
            }
          }
        }
      })
      .state('signup', {
        parent: 'root',
        url: '/signup',
        views: {
          '@':{
            templateUrl: 'app/account/signup/signup.html',
            controller: 'SignupController',
            controllerAs: 'vm'
          }
        }
        
      })
      .state('settings', {
        parent: 'root',
        url: '/settings',
        views: {
          '@':{
            templateUrl: 'app/account/settings/settings.html',
            controller: 'SettingsController',
            controllerAs: 'vm'
          }
        },
        authenticate: true
      });
  })
  .run(function($rootScope) {
    $rootScope.$on('$stateChangeStart', function(event, next, nextParams, current) {
      console.log(next);
      if (next.name === 'logout' && current && current.name && !current.authenticate) {
        next.referrer = current.name;
      }
    });
  });
