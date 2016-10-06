/* ToolBar.directive.js */

/**
* @desc toolbar directive that is used on the main page across the entire app.
* @example <div tool-bar></div>
*/

angular
	.module('ahNutsWebApp')
	.directive('buyFlavors', buyFlavors);

/* @ngInject */
function buyFlavors() {
	var directive = {
		restrict: 'AECM',
		templateUrl: 'views/directives/buyFlavors.directive.htm',
		replace: true,
		scope: {},
		link: linkFunc,
		controller: buyFlavorsController,
		controllerAs: 'vm',
		bindToController: true
	}

	/* @ngInject */
	function linkFunc(scope, el, attr, ctrl) {
    }

    buyFlavorsController.$inject = ['$scope', '$log'];
    /* @ngInject */
    function buyFlavorsController($scope, $log) {
	    var vm = this;

	}

	return  directive;
		
};