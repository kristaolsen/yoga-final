
var app = angular.module('yogaSpa', [
  'ngRoute',
  'ngMap', 
  'ngAnimate',
]);

var yogaClassApp = angular.module('yogaClassApp', [
    'ngRoute',
    'yogaClassControllers',
    'yogaClassFilters'
]);


/**
* Configure the Routes for SPA Sections
*/
app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
    // Home
    .when("/", { templateUrl: "partials/home.html", controller: "PageCtrl" })

    // Pages
  
     .when("/schedule", {
         templateUrl: "partials/schedule.html", 
         controller: "PageCtrl, AccordionCtrl, YogaClassCtrl"
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


    // else 404
    .otherwise("/404", { templateUrl: "partials/404.html", controller: "PageCtrl" });
} ]);


app.controller('PageCtrl', function ( $scope/*, $location, $http */) {
    console.log("Page Controller reporting for testing.");
    $scope.pageClass = 'page-effect';

});




//'use strict';
app.directive('autoActive', ['$location', function ($location) {
    return {
        restrict: 'A',
        scope: false,
        link: function (scope, element) {
            function setActive() {
                var path = $location.path();
                if (path) {
                    angular.forEach(element.find('li'), function (li) {
                        var anchor = li.querySelector('a');
                        if (anchor.href.match('#' + path + '(?=\\?|$)')) {
                            angular.element(li).addClass('current');
                        } else {
                            angular.element(li).removeClass('current');
                        }
                    });
                }
            }

            setActive();

            scope.$on('$locationChangeSuccess', setActive);
        }
    }
} ]);
















