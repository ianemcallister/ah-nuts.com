/* ToolBar.directive.js */

/**
* @desc toolbar directive that is used on the main page across the entire app.
* @example <div tool-bar></div>
*/

angular
	.module('ahNutsWebApp')
	.directive('aquisitionManager', aquisitionManager);

/* @ngInject */
function aquisitionManager() {
	var directive = {
		restrict: 'AECM',
		templateUrl: 'views/directives/aquisitionManager.directive.htm',
		replace: true,
		scope: {
		},
		link: linkFunc,
		controller: aquisitionManagerController,
		controllerAs: 'vm',
		bindToController: true
	}

	/* @ngInject */
	function linkFunc(scope, el, attr, ctrl) {
    }

    aquisitionManagerController.$inject = ['$scope', '$log'];
    /* @ngInject */
    function aquisitionManagerController($scope, $log) {
	    var vm = this;

	}

	return  directive;
		
};