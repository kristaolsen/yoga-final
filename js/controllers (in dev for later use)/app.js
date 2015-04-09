'use strict';

var yogaClassApp = angular.module('yogaClassApp', [
	'ngRoute',
	'yogaClassControllers',
	'yogaClassFilters',
	'google-maps',
	'ui.bootstrap'
]);

yogaClassApp.config(['$routeProvider', '$locationProvider',
	function($routeProvider, $locationProvider) {
		$routeProvider
			.when('/', {
				  // Schedule
    .when("/", { templateUrl: "partials/schedule.html", controller: "PageCtrl" })
			
			.otherwise({
				redirectTo: '/'
			});
		
		$locationProvider.html5Mode(true); // To remove the hash from the URL	
	}
]);



var app = angular.module('yogaSpa', [
  'ngRoute', 'ngMap', 'ngAnimate'
]);

/**
* Configure the Routes for Sections
*/
app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
    // Home
    .when("/", { templateUrl: "partials/home.html", controller: "PageCtrl" })

    // Pages
  
    .when("/work", { templateUrl: "partials/work.html", controller: "PageCtrl" })

    .when("/experiences", { templateUrl: "partials/experiences.html", controller: "PageCtrl" })
    .when("/blog", { templateUrl: "partials/blog.html", controller: "PageCtrl" })
    .when("/contact", { templateUrl: "partials/contact.html", controller: "PageCtrl" })

    // else 404
    .otherwise("/404", { templateUrl: "partials/404.html", controller: "PageCtrl" });
} ]);


app.controller('PageCtrl', function ( $scope/*, $location, $http */) {
    console.log("Page Controller reporting for duty.");
    $scope.pageClass = 'page-effect';

});