/* ToolBar.directive.js */

/**
* @desc toolbar directive that is used on the main page across the entire app.
* @example <div tool-bar></div>
*/

angular
	.module('ahNutsWebApp')
	.directive('qtyManager', qtyManager);

/* @ngInject */
function qtyManager() {
	var directive = {
		restrict: 'AECM',
		templateUrl: 'views/directives/qtyManager.directive.htm',
		replace: true,
		scope: {
			qty: '='
		},
		link: linkFunc,
		controller: qtyManagerController,
		controllerAs: 'vm',
		bindToController: true
	}

	/* @ngInject */
	function linkFunc(scope, el, attr, ctrl) {
    }

    qtyManagerController.$inject = ['$scope', '$log'];
    /* @ngInject */
    function qtyManagerController($scope, $log) {
	    var vm = this;


	    vm.subtract = function() { if(vm.qty > 1) vm.qty--; }
	    vm.add = function() { vm.qty++; }
	}

	return  directive;
		
};