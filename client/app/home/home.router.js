'use strict';

angular.module('paquetApp.home')
	.config(function($stateProvider) {
		$stateProvider.state('home', {
			url: '/home',
			templateUrl: 'app/home/home.html',
			controller: 'HomeController',
			controllerAs: 'Home'
		});
	});