'use strict';

angular.module('paquetApp')
  .directive('navbar', () => ({
    templateUrl: 'components/navbar/navbar.html',
    restrict: 'E',
    controller: 'NavbarController',
    controllerAs: 'nav'
  }))
  .config(function($mdThemingProvider) {

        const mycolors = $mdThemingProvider.extendPalette('grey', {
            'A100':'rgba(255,255,255,.00001)', //transparent
            'A200': 'rgba(0,0,0,1)', // black
        });
        $mdThemingProvider.definePalette('mycolors', mycolors);
        $mdThemingProvider.theme('navbar', 'default');
        // There is a bug that doesn't register nav bar's accent if there is a theme other than default
        // issue is here https://github.com/angular/material/issues/9137
        $mdThemingProvider.theme('navbar').accentPalette('blue');
        $mdThemingProvider.theme('default').accentPalette('red', {
            'default': '900'
        });
    });
