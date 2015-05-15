
// create our angular module and inject firebase
var yogaClassApp = angular.module("yogaClassApp", ["ngRoute","yogaClassControllers", "yogaClassFilters","firebase"])
.constant('FIREBASE_URL', 'https://yogaspascheduler.firebaseio.com');

var appControllers = angular.module("yogaClassControllers", []);

/**
* Configure the Route for SPA Schedule Sections
*/
yogaClassApp.config(['$routeProvider', '$locationProvider',
	function($routeProvider, $locationProvider) {
		$routeProvider
	
    // Page
  
     .when("/schedule", {
         templateUrl: "partials/schedule.html", 
         controller: "PageCtrl, YogaClassCtrl, AccordionCtrl"
          })

    
]);



