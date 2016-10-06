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
		scope: {},
		link: linkFunc,
		controller: locationsThisWeekController,
		controllerAs: 'vm',
		bindToController: true
	}

	/* @ngInject */
	function linkFunc(scope, el, attr, ctrl) {
    }

    locationsThisWeekController.$inject = ['$scope', '$log'];
    /* @ngInject */
    function locationsThisWeekController($scope, $log) {
	    var vm = this;

	}

	return  directive;
		
};