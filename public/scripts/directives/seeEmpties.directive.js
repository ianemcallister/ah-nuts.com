/* ToolBar.directive.js */

/**
* @desc toolbar directive that is used on the main page across the entire app.
* @example <div tool-bar></div>
*/

angular
	.module('ahNutsWebApp')
	.directive('seeEmpties', seeEmpties);

/* @ngInject */
function seeEmpties() {
	var directive = {
		restrict: 'AECM',
		templateUrl: 'views/directives/seeEmpties.directive.htm',
		replace: true,
		scope: {},
		link: linkFunc,
		controller: seeEmptiesController,
		controllerAs: 'vm',
		bindToController: true
	}

	/* @ngInject */
	function linkFunc(scope, el, attr, ctrl) {
    }

    seeEmptiesController.$inject = ['$scope', '$log'];
    /* @ngInject */
    function seeEmptiesController($scope, $log) {
	    var vm = this;

	}

	return  directive;
		
};