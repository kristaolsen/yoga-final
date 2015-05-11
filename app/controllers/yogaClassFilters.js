/* Filter by studio */
angular.module('yogaClassFilters', []).filter('studioFilter', function() {
	return function(items, studios) {
		var studioMatches = [];

		angular.forEach(items, function(item) {
			if(studios.midtown == false && studios.brooklyn == false) {
				studioMatches.push(item);
			}
			else if(studios.midtown == true && studios.brooklyn == false && item.studio == 'Midtown') {
				studioMatches.push(item);
			}
			else if(studios.midtown == false && studios.brooklyn == true && item.studio == 'Brooklyn') {
				studioMatches.push(item);
			}
			else if(studios.midtown == true && studios.brooklyn == true) {
				studioMatches.push(item);
			}
		});

		return studioMatches;
	};
})

/* Filter by level */
.filter('levelFilter', function() { 
	return function(items, levels) {
		var levelMatches = [];

		angular.forEach(items, function(item) {
			if(levels.allLevels == false && levels.levelOne == false && levels.levelTwo == false) {
				levelMatches.push(item);
			}
			else if(levels.allLevels == true && levels.levelOne == false && levels.levelTwo == false && item.level == 'All') {
				levelMatches.push(item);
			}
			else if(levels.allLevels == false && levels.levelOne == true && levels.levelTwo == false && item.level == 'I') {
				levelMatches.push(item);
			}
			else if(levels.allLevels == false && levels.levelOne == false && levels.levelTwo == true && item.level == 'II') {
				levelMatches.push(item);
			}
			else if(levels.allLevels == true && levels.levelOne == false && levels.levelTwo == true) {
				levelMatches.push(item);
			}
			else if(levels.allLevels == true && levels.levelOne == true && levels.levelTwo == false) {
				levelMatches.push(item);
			}
			else if(levels.allLevels == false && levels.levelOne == true && levels.levelTwo == true) {
				levelMatches.push(item);
			}
			else if(levels.allLevels == true && levels.levelOne == true && levels.levelTwo == true) {
				levelMatches.push(item);
			}
		});

		return levelMatches;
	};
})

/* Filter by class */
.filter('classNameFilter', function() { 
	return function(items, classNames) {
		var classNameMatches = [];

		angular.forEach(items, function(item) {
			if(classNames.allLevelsFlowClass == false && classNames.levelOneClass == false && classNames.levelTwoClass == false) {
				classNameMatches.push(item);
			}
			else if(classNames.allLevelsFlowClass  == true && classNames.levelOneClass == false && classNames.levelTwoClass == false && item.yogaClassName == 'All Levels Flow') {
				classNameMatches.push(item);
			}
			else if(classNames.allLevelsFlowClass  == false && classNames.levelOneClass == true && classNames.levelTwoClass == false && item.yogaClassName == 'Level I') {
				classNameMatches.push(item);
			}
			else if(classNames.allLevelsFlowClass  == false && classNames.levelOneClass == false && classNames.levelTwoClass == true && item.yogaClassName == 'Level II') {
				classNameMatches.push(item);
			}
			else if(classNames.allLevelsFlowClass  == true && classNames.levelOneClass == true && classNames.levelTwoClass == true) {
				classNameMatches.push(item);
			}
		});

		return classNameMatches;
	};
});
