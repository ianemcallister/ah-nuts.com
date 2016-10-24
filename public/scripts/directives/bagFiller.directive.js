/* ToolBar.directive.js */

/**
* @desc toolbar directive that is used on the main page across the entire app.
* @example <div tool-bar></div>
*/

angular
	.module('ahNutsWebApp')
	.directive('bagFiller', bagFiller);

/* @ngInject */
function bagFiller() {
	var directive = {
		restrict: 'AECM',
		templateUrl: 'views/directives/bagFiller.directive.htm',
		replace: true,
		scope: {},
		link: linkFunc,
		controller: bagFillerController,
		controllerAs: 'vm',
		bindToController: true
	}

	/* @ngInject */
	function linkFunc(scope, el, attr, ctrl) {
    }

    bagFillerController.$inject = ['$scope', '$log'];
    /* @ngInject */
    function bagFillerController($scope, $log) {
	    var vm = this;

	}

	return  directive;
		
};