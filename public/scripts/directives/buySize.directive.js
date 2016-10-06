/* ToolBar.directive.js */

/**
* @desc toolbar directive that is used on the main page across the entire app.
* @example <div tool-bar></div>
*/

angular
	.module('ahNutsWebApp')
	.directive('buySize', buySize);

/* @ngInject */
function buySize() {
	var directive = {
		restrict: 'AECM',
		templateUrl: 'views/directives/buySize.directive.htm',
		replace: true,
		scope: {},
		link: linkFunc,
		controller: buySizeController,
		controllerAs: 'vm',
		bindToController: true
	}

	/* @ngInject */
	function linkFunc(scope, el, attr, ctrl) {
    }

    buySizeController.$inject = ['$scope', '$log'];
    /* @ngInject */
    function buySizeController($scope, $log) {
	    var vm = this;

	}

	return  directive;
		
};