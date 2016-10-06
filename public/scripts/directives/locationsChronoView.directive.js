/* ToolBar.directive.js */

/**
* @desc toolbar directive that is used on the main page across the entire app.
* @example <div tool-bar></div>
*/

angular
	.module('ahNutsWebApp')
	.directive('locationsChronoView', locationsChronoView);

/* @ngInject */
function locationsChronoView() {
	var directive = {
		restrict: 'AECM',
		templateUrl: 'views/directives/locationsChronoView.directive.htm',
		replace: true,
		scope: {},
		link: linkFunc,
		controller: locationsChronoViewController,
		controllerAs: 'vm',
		bindToController: true
	}

	/* @ngInject */
	function linkFunc(scope, el, attr, ctrl) {
    }

    locationsChronoViewController.$inject = ['$scope', '$log'];
    /* @ngInject */
    function locationsChronoViewController($scope, $log) {
	    var vm = this;

	}

	return  directive;
		
};