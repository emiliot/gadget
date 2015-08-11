'use strict';

angular.module('gadget', ['ngAnimate', 'ngTouch', 'ngSanitize', 'ngResource', 'ui.router', 'ui.bootstrap'])
.config(function ($stateProvider, $urlRouterProvider) {
	$stateProvider
	.state('build', {
		url: '/',
		templateUrl: 'app/components/construction/index.html',
		controller: 'ConstructionCtrl'
	})
	.state('home', {
		url: '/main',
		templateUrl: 'app/main/main.html',
		controller: 'MainCtrl'
	});

	$urlRouterProvider.otherwise('/');
})
;
