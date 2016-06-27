'use strict';

angular.module('paquetApp')
	.config(function($stateProvider) {
		$stateProvider.state('home', {
			url: '/home',
			templateUrl: 'app/home/home.html'
		});
	})
	.config(['snSkrollrProvider',function(snSkrollrProvider) {
		// snSkrollrProvider.config({smoothscrolling: true});
	}])
	.run(['snSkrollr', function(snSkrollr) {
		snSkrollr.init();
		
    }]);