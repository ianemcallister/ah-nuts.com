/* ToolBar.directive.js */

/**
* @desc toolbar directive that is used on the main page across the entire app.
* @example <div tool-bar></div>
*/

angular
	.module('ahNutsWebApp')
	.directive('listOfFlavors', listOfFlavors);

/* @ngInject */
function listOfFlavors() {
	var directive = {
		restrict: 'AECM',
		templateUrl: 'views/directives/listOfFlavors.directive.htm',
		replace: true,
		scope: {
			flavors: '=',
			pickAFlavor: '&'
		},
		link: linkFunc,
		controller: listOfFlavorsController,
		controllerAs: 'vm',
		bindToController: true
	}

	/* @ngInject */
	function linkFunc(scope, el, attr, ctrl) {
    }

    listOfFlavorsController.$inject = ['$scope', '$log'];
    /* @ngInject */
    function listOfFlavorsController($scope, $log) {
	    var vm = this;

	}

	return  directive;
		
};