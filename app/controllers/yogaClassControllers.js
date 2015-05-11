// create our angular module and inject firebase
var yogaClassControllers = angular.module('yogaClassControllers', ['firebase']);


/*****************************************************************
		Class Schedule Controller
*****************************************************************/

// create our main controller and get access to firebase
yogaClassControllers.controller('YogaClassCtrl', function($scope, $firebase, $yogaClassFilters) {

// connect to firebase 
  	var ref = new Firebase("http://yogaspascheduler.firebaseIO.com/yogaclasses");  
  	var fb = $firebase(ref);

// sync as object 
  var syncObject = fb.$asObject();
  
});

 // three way data binding
  syncObject.$bindTo($scope, 'dayNumber');
  
});

		yogaClassControllers.controller('YogaClassCtrl', ['$scope', '$http', 
	function($scope, $http) {
		$http.get('http://yogaspascheduler.firebaseIO.com/yogaclasses')success(function(data) { 
			$scope.classes = data;
		});

		$scope.dayNumber = 'dayNumber';

		$scope.classNames = {allLevelsFlowClass: false, levelOneClass: false, levelTwoClass: false}

		$scope.studios = {midtown: false, brooklyn: false};

		$scope.levels = {allLevels: false, levelOne: false, levelTwo: false};
	}
]);
		


/*****************************************************************
		Passes & Rates Accordion Controller
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




