'use strict';

angular.module('paquetApp')
	.config(function($stateProvider) {
		$stateProvider.state('home', {
			url: '/home',
			templateUrl: 'app/home/home.html'
		});
	});