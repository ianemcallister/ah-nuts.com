/* ToolBar.directive.js */

/**
* @desc toolbar directive that is used on the main page across the entire app.
* @example <div tool-bar></div>
*/

angular
	.module('ahNutsWebApp')
	.directive('locationsTimeFilter', locationsTimeFilter);

/* @ngInject */
function locationsTimeFilter() {
	var directive = {
		restrict: 'AECM',
		templateUrl: 'views/directives/locationsTimeFilter.directive.htm',
		replace: true,
		scope: {},
		link: linkFunc,
		controller: locationsTimeFilterController,
		controllerAs: 'vm',
		bindToController: true
	}

	/* @ngInject */
	function linkFunc(scope, el, attr, ctrl) {
    }

    locationsTimeFilterController.$inject = ['$scope', '$log'];
    /* @ngInject */
    function locationsTimeFilterController($scope, $log) {
	    var vm = this;

	}

	return  directive;
		
};