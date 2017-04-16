'use strict';
var app = angular.module('employee-dir',['ui.router','ui.utils'])
    .config(['$stateProvider', '$urlRouterProvider', 
	function($stateProvider, $urlRouterProvider) {
		$stateProvider
		.state('home', {
			url: '/',
			templateUrl: 'modules/employee-dir/views/app.client.view.html',
			controller: 'employee-dir-controller'
		})
		$urlRouterProvider.otherwise('/');
	}
]);