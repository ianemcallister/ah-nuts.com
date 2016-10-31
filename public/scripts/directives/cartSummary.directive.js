/* ToolBar.directive.js */

/**
* @desc toolbar directive that is used on the main page across the entire app.
* @example <div tool-bar></div>
*/

angular
	.module('ahNutsWebApp')
	.directive('cartSummary', cartSummary);

/* @ngInject */
function cartSummary() {
	var directive = {
		restrict: 'AECM',
		templateUrl: 'views/directives/cartSummary.directive.htm',
		replace: true,
		scope: {
			cart: '='
		},
		link: linkFunc,
		controller: cartSummaryController,
		controllerAs: 'vm',
		bindToController: true
	}

	/* @ngInject */
	function linkFunc(scope, el, attr, ctrl) {
    }

    cartSummaryController.$inject = ['$scope', '$log'];
    /* @ngInject */
    function cartSummaryController($scope, $log) {
	    var vm = this;
	    
	}

	return  directive;
		
};