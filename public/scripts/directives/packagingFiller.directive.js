/* ToolBar.directive.js */

/**
* @desc toolbar directive that is used on the main page across the entire app.
* @example <div tool-bar></div>
*/

angular
	.module('ahNutsWebApp')
	.directive('packagingFiller', packagingFiller);

/* @ngInject */
function packagingFiller() {
	var directive = {
		restrict: 'AECM',
		templateUrl: 'views/directives/packagingFiller.directive.htm',
		replace: true,
		scope: {
			currentlyFilling: "="
		},
		link: linkFunc,
		controller: packagingFillerController,
		controllerAs: 'vm',
		bindToController: true
	}

	/* @ngInject */
	function linkFunc(scope, el, attr, ctrl) {
    }

    packagingFillerController.$inject = ['$scope', '$log'];
    /* @ngInject */
    function packagingFillerController($scope, $log) {
	    var vm = this;

	}

	return  directive;
		
};