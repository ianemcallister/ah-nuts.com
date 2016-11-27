/* ToolBar.directive.js */

/**
* @desc toolbar directive that is used on the main page across the entire app.
* @example <div tool-bar></div>
*/

angular
	.module('ahNutsWebApp')
	.directive('errorMessage', errorMessage);

/* @ngInject */
function errorMessage() {
	var directive = {
		restrict: 'AECM',
		templateUrl: 'views/directives/errorMessage.directive.htm',
		replace: true,
		scope: {},
		link: linkFunc,
		controller: errorMessageController,
		controllerAs: 'vm',
		bindToController: true
	}

	/* @ngInject */
	function linkFunc(scope, el, attr, ctrl) {
    }

    errorMessageController.$inject = ['$scope', '$log'];
    /* @ngInject */
    function errorMessageController($scope, $log) {
	    var vm = this;
	    
	}

	return  directive;
		
};