
// create our angular module and inject firebase
var yogaClassApp = angular.module("yogaClassApp", ["ngRoute","yogaClassControllers", "yogaClassFilters","firebase"])
.constant('FIREBASE_URL', 'https://yogaspascheduler.firebaseio.com');

var appControllers = angular.module("yogaClassControllers", []);

/**
* Configure the Routes for SPA Sections
*/
yogaClassApp.config(['$routeProvider', '$locationProvider',
	function($routeProvider, $locationProvider) {
		$routeProvider
		// Home
    .when("/", { 
    	templateUrl: "partials/home.html", 
    	controller: "PageCtrl" 
    })

    // Pages
  
     .when("/schedule", {
         templateUrl: "partials/schedule.html", 
         controller: "PageCtrl, YogaClassCtrl"
          })

     .when("/experiences", { 
         templateUrl: "partials/experiences.html", 
         controller: "PageCtrl" 
           })

    .when("/blog", { 
        templateUrl: "partials/blog.html", 
        controller: "PageCtrl" 
           })

    .when("/contact", 
        { templateUrl: "partials/contact.html", 
        controller: "PageCtrl" 
            })
	}
]);

