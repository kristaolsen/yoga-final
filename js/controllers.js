'use strict';

var yogaClassControllers = angular.module('yogaClassControllers', []);

/*****************************************************************
		Navigation Controller
*****************************************************************/

yogaClassControllers.controller('ScrollController', ['$scope', '$location', '$anchorScroll',
  function ($scope, $location, $anchorScroll) {
    $scope.gotoSchedule = function() {
      $location.hash('class_schedule');
      $anchorScroll();
    };

    $scope.gotoStudioLocation = function() {
      $location.hash('studio-locations');
      $anchorScroll();
    };
  }
]);

/*****************************************************************
		Class Schedule Controller
*****************************************************************/

yogaClassControllers.controller('YogaClassCtrl', ['$scope', '$http', 
	function($scope, $http) {
		$http.get('http://yogaspascheduler.firebaseIO.com/yogaclasses').success(function(data) { .success(function(data) {*/
			$scope.classes = data;
		});

		$scope.dayNumber = 'dayNumber';

		$scope.classNames = {allLevelsFlowClass: false, levelOneClass: false, levelTwoClass: false}

		$scope.studios = {hellsKitchen: false, brooklyn: false};

		$scope.levels = {allLevels: false, levelOne: false, levelTwo: false};
	}
]);

/*****************************************************************
		Google Map Controller
*****************************************************************/

yogaClassControllers.controller('LocationMapCtrl', ['$scope', 
	function($scope) {
		$scope.midtownMap = {
	    center: {
	      latitude: 40.76381900000001,
	      longitude: -73.988292
	    },
	    zoom: 14,
	    marker: {
	    	coords: {
	    		latitude: 40.76381900000001,
	      	longitude: -73.988292
	      }
	    }
		};

		$scope.brooklynMap = {
	    center: {
	      latitude: 40.6609503,
	      longitude: -73.98352599999998
	    },
	    zoom: 14,
	    marker: {
	    	coords: {
	    		latitude: 40.6609503,
	      	longitude: -73.98352599999998
	      }
	    }
		};
	}
]);

/*****************************************************************
		Passes & Rates Controller
*****************************************************************/

yogaClassControllers.controller('AccordionCtrl', ['$scope', 
	function($scope) {
	  $scope.oneAtATime = false;

	  $scope.status = {
	    isFirstOpen: true,
	    isFirstDisabled: false
	  };
	}
]);

/*yogaClassControllers.controller('YogaClassDetailCtrl', ['$scope', '$routeParams',
 	function($scope, $routeParams) {
 			$scope.yogaClass = data;
 }]);*/

yogaClassControllers.controller('YogaClassDetailCtrl', ['$scope', '$routeParams', '$http', 
	function($scope, $routeParams, $http) {
		/*$http.get('classes/' + $routeParams.classId + '.json').success(function(data) {*/
		$http.get('classes/all-levels-flow.json').success(function(data) {
			console.log($scope.yogaClass = data);

		});
}]);








