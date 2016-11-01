/* ToolBar.directive.js */

/**
* @desc toolbar directive that is used on the main page across the entire app.
* @example <div tool-bar></div>
*/

angular
	.module('ahNutsWebApp')
	.directive('shippingOptions', shippingOptions);

/* @ngInject */
function shippingOptions() {
	var directive = {
		restrict: 'AECM',
		templateUrl: 'views/directives/shippingOptions.directive.htm',
		replace: true,
		scope: {
		},
		link: linkFunc,
		controller: shippingOptionsController,
		controllerAs: 'vm',
		bindToController: true
	}

	/* @ngInject */
	function linkFunc(scope, el, attr, ctrl) {
    }

    shippingOptionsController.$inject = ['$scope', '$log'];
    /* @ngInject */
    function shippingOptionsController($scope, $log) {
	    
    	//local variables
	    var vm = this;

	}

	return  directive;
		
};