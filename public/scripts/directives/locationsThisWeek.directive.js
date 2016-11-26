/* ToolBar.directive.js */

/**
* @desc toolbar directive that is used on the main page across the entire app.
* @example <div tool-bar></div>
*/

angular
	.module('ahNutsWebApp')
	.directive('locationsThisWeek', locationsThisWeek);

/* @ngInject */
function locationsThisWeek() {
	var directive = {
		restrict: 'AECM',
		templateUrl: 'views/directives/locationsThisWeek.directive.htm',
		replace: true,
		scope: {
			locations: '='
		},
		link: linkFunc,
		controller: locationsThisWeekController,
		controllerAs: 'vm',
		bindToController: true
	}

	/* @ngInject */
	function linkFunc(scope, el, attr, ctrl) {
    }

    locationsThisWeekController.$inject = ['$scope', '$log', 'locationsFilter'];
    /* @ngInject */
    function locationsThisWeekController($scope, $log, locationsFilter) {

    	var vm = this;
    	
    	//view model values
    	vm.locationsThisWeek = locationsFilter.weekly(vm.locations, getWeek());

	    function getWeek() {
	    	var today = new Date();
	    	var onejan = new Date(today.getFullYear(), 0, 1);
        	return Math.ceil((((today - onejan) / 86400000) + onejan.getDay() + 1) / 7);
	    }

	}

	return  directive;
		
};