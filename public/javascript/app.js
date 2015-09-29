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
		state('Tutorials', {
		url:'/Tutorials',
		templateUrl: 'views/tutorials.html'
		}).
		state('Portfolio', {
		url:'/Portfolio',
		templateUrl: 'views/portfolio.html'
		}).
		state('WebApp', {
		url:'/WebApp',
		templateUrl: 'views/webApp.html'
		}).
		state('TutorialOne', {
		url:'/TutorialOne',
		templateUrl: 'views/tutorialOne.html'
		});
		$urlRouterProvider.otherwise('/');
	}
})();