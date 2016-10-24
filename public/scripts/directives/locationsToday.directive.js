/* ToolBar.directive.js */

/**
* @desc toolbar directive that is used on the main page across the entire app.
* @example <div tool-bar></div>
*/

angular
	.module('ahNutsWebApp')
	.directive('locationsToday', locationsToday);

/* @ngInject */
function locationsToday() {
	var directive = {
		restrict: 'AECM',
		templateUrl: 'views/directives/locationsToday.directive.htm',
		replace: true,
		scope: {},
		link: linkFunc,
		controller: locationsTodayController,
		controllerAs: 'vm',
		bindToController: true
	}

	/* @ngInject */
	function linkFunc(scope, el, attr, ctrl) {
    }

    locationsTodayController.$inject = ['$scope', '$log', 'backendComFactory'];
    /* @ngInject */
    function locationsTodayController($scope, $log, backendComFactory) {
	    var vm = this;
	    var backend = backendComFactory;

	    vm.todaysMarkets = backend.get();

	    console.log(vm.todaysMarkets);
	}

	return  directive;
		
};