/* ToolBar.directive.js */

/**
* @desc toolbar directive that is used on the main page across the entire app.
* @example <div tool-bar></div>
*/

angular
	.module('ahNutsWebApp')
	.directive('paymentManager', paymentManager);

/* @ngInject */
function paymentManager() {
	var directive = {
		restrict: 'AECM',
		templateUrl: 'views/directives/paymentManager.directive.htm',
		replace: true,
		scope: {},
		link: linkFunc,
		controller: paymentManagerController,
		controllerAs: 'vm',
		bindToController: true
	}

	/* @ngInject */
	function linkFunc(scope, el, attr, ctrl) {
    }

    paymentManagerController.$inject = ['$scope', '$log', 'backendComFactory'];
    /* @ngInject */
    function paymentManagerController($scope, $log, backendComFactory) {
	    var vm = this;

	}

	return  directive;
		
};