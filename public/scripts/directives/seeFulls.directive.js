/* ToolBar.directive.js */

/**
* @desc toolbar directive that is used on the main page across the entire app.
* @example <div tool-bar></div>
*/

angular
	.module('ahNutsWebApp')
	.directive('seeFulls', seeFulls);

/* @ngInject */
function seeFulls() {
	var directive = {
		restrict: 'AECM',
		templateUrl: 'views/directives/seeFulls.directive.htm',
		replace: true,
		scope: {},
		link: linkFunc,
		controller: seeFullsController,
		controllerAs: 'vm',
		bindToController: true
	}

	/* @ngInject */
	function linkFunc(scope, el, attr, ctrl) {
    }

    seeFullsController.$inject = ['$scope', '$log'];
    /* @ngInject */
    function seeFullsController($scope, $log) {
	    var vm = this;

	}

	return  directive;
		
};