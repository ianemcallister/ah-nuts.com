/* ToolBar.directive.js */

/**
* @desc toolbar directive that is used on the main page across the entire app.
* @example <div tool-bar></div>
*/

angular
	.module('ahNutsWebApp')
	.directive('emailHelper', emailHelper);

/* @ngInject */
function emailHelper() {
	var directive = {
		restrict: 'AECM',
		templateUrl: 'views/directives/emailHelper.directive.htm',
		replace: true,
		scope: {},
		link: linkFunc,
		controller: emailHelperController,
		controllerAs: 'vm',
		bindToController: true
	}

	/* @ngInject */
	function linkFunc(scope, el, attr, ctrl) {
    }

    emailHelperController.$inject = ['$scope', '$log'];
    /* @ngInject */
    function emailHelperController($scope, $log) {
	    var vm = this;

	}

	return  directive;
		
};