/* ToolBar.directive.js */

/**
* @desc toolbar directive that is used on the main page across the entire app.
* @example <div tool-bar></div>
*/

angular
	.module('ahNutsWebApp')
	.directive('platterFiller', platterFiller);

/* @ngInject */
function platterFiller() {
	var directive = {
		restrict: 'AECM',
		templateUrl: 'views/directives/platterFiller.directive.htm',
		replace: true,
		scope: {
		},
		link: linkFunc,
		controller: platterFillerController,
		controllerAs: 'vm',
		bindToController: true
	}

	/* @ngInject */
	function linkFunc(scope, el, attr, ctrl) {
    }

    platterFillerController.$inject = ['$scope', '$log'];
    /* @ngInject */
    function platterFillerController($scope, $log) {
	    var vm = this;

	}

	return  directive;
		
};