'use strict';

angular.module('paquetApp')
  .directive('navbar', () => ({
    templateUrl: 'components/navbar/navbar.html',
    restrict: 'E',
    controller: 'NavbarController',
    controllerAs: 'nav'
  }))
  .config(function($mdThemingProvider) {
        // create a dark and a light navbar theme based on default theme
        $mdThemingProvider.theme('navbar');
        const navTheme = $mdThemingProvider.theme('navbar'); // dark text
        const navDark = $mdThemingProvider.theme('navdark'); // light text
        
        // create transparent palette by extending grey palette
        const transparent = $mdThemingProvider.extendPalette('grey', {
            '50':'rgba(255,255,255,.00001)', // transparent
            '100':'rgba(255,255,255,1)',  // white
            '900':'rgba(0,0,0,1)'
        }); 
        $mdThemingProvider.definePalette('transparent', transparent);
        

        // Set theme backgrounds as transparent
        navTheme
        .backgroundPalette('transparent', {
            'default': '50'
        }) // make the default accent red-900
        .accentPalette('red', {
            'default': '900'
        });

        navDark.dark()
        .backgroundPalette('transparent', {
            'default': '50'
        })
        .accentPalette('red', {
            'default': '900'
        });
    });
