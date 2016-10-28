/* ToolBar.directive.js */

/**
* @desc toolbar directive that is used on the main page across the entire app.
* @example <div tool-bar></div>
*/

angular
	.module('ahNutsWebApp')
	.directive('coneFiller', coneFiller);

/* @ngInject */
function coneFiller() {
	var directive = {
		restrict: 'AECM',
		templateUrl: 'views/directives/coneFiller.directive.htm',
		replace: true,
		scope: {
		},
		link: linkFunc,
		controller: coneFillerController,
		controllerAs: 'vm',
		bindToController: true
	}

	/* @ngInject */
	function linkFunc(scope, el, attr, ctrl) {
    }

    coneFillerController.$inject = ['$scope', '$log'];
    /* @ngInject */
    function coneFillerController($scope, $log) {
	    var vm = this;

	}

	return  directive;
		
};