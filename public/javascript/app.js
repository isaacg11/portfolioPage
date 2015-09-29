(function() {
	'use strict';
	angular.module('app', ['ui.router'])
	.config(Config);
	Config.$inject = ['$stateProvider', '$urlRouterProvider'];
	function Config($stateProvider, $urlRouterProvider) {
		$stateProvider.state('Home',{
			url: '/',
			templateUrl: 'views/home.html'
		}).
		state('Tutorial1', {
		url:'/Tutorial1',
		templateUrl: 'views/tutorial1.html'
		}).
		state('Portfolio', {
		url:'/Portfolio',
		templateUrl: 'views/portfolio.html'
		}).
		state('WebApp', {
		url:'/WebApp',
		templateUrl: 'views/webApp.html'
		}).
		state('Tutorial2', {
		url:'/Tutorial2',
		templateUrl: 'views/tutorial2.html'
		}).
		state('Tutorial3', {
		url:'/Tutorial3',
		templateUrl: 'views/tutorial3.html'
		}).
		state('Tutorial4', {
		url:'/Tutorial4',
		templateUrl: 'views/tutorial4.html'
		}).
		state('Tutorial5', {
		url:'/Tutorial5',
		templateUrl: 'views/tutorial5.html'
		});
		$urlRouterProvider.otherwise('/');
	}
})();