/* ToolBar.directive.js */

/**
* @desc toolbar directive that is used on the main page across the entire app.
* @example <div tool-bar></div>
*/

angular
	.module('ahNutsWebApp')
	.directive('selectFlavors', selectFlavors);

/* @ngInject */
function selectFlavors() {
	var directive = {
		restrict: 'AECM',
		templateUrl: 'views/directives/selectFlavors.directive.htm',
		replace: true,
		scope: {
			packagingSelected: '=',
			removeASize: '&'
		},
		link: linkFunc,
		controller: selectFlavorsController,
		controllerAs: 'vm',
		bindToController: true
	}

	/* @ngInject */
	function linkFunc(scope, el, attr, ctrl) {
    }

    selectFlavorsController.$inject = ['$scope', '$log'];
    /* @ngInject */
    function selectFlavorsController($scope, $log) {
	    var vm = this;

	    vm.sizeBtnClicked = function(packaging) {
	    	$log.info('clikced', packaging, vm.packagingSelected[packaging]);
	    	//decrement the count of this package that was clicked
	    	vm.packagingSelected[packaging] = vm.removeASize()(vm.packagingSelected[packaging]);
	    }

	}

	return  directive;
		
};