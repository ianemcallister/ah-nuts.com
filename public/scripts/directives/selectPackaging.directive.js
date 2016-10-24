/* ToolBar.directive.js */

/**
* @desc toolbar directive that is used on the main page across the entire app.
* @example <div tool-bar></div>
*/

angular
	.module('ahNutsWebApp')
	.directive('selectPackaging', selectPackaging);

/* @ngInject */
function selectPackaging() {
	var directive = {
		restrict: 'AECM',
		templateUrl: 'views/directives/selectPackaging.directive.htm',
		replace: true,
		scope: {
			packagingSelected: '=',
			addASize: "&"
		},
		link: linkFunc,
		controller: selectPackagingController,
		controllerAs: 'vm',
		bindToController: true
	}

	/* @ngInject */
	function linkFunc(scope, el, attr, ctrl) {
    }

    selectPackagingController.$inject = ['$scope', '$log'];
    /* @ngInject */
    function selectPackagingController($scope, $log) {
	    var vm = this;

	    vm.sizeBtnClicked = function(size) {
	    	
	    	vm.packagingSelected[size] = vm.addASize()(vm.packagingSelected[size]);

	    }

	}

	return  directive;
		
};