'use strict';

angular.module('paquetApp.home')
	.config(function($stateProvider) {
		$stateProvider
        .state('home', {
            parent: 'root',
			url: '/home',
            views: {'@': {
                templateUrl: 'app/home/views/home.html',
                controller: 'HomeController',
                controllerAs: 'Home'
            }}
			
		})
        .state('about', {
            name: 'about',
            url: '/about',
            parent: 'home',
            templateUrl: 'app/home/views/about.html'
        });
	});