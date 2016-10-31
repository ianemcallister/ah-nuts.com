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
			state: '=',
			pricing: '=',
			changeTab: '&'
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

	    	//vm.currentlyFilling.packaging = size;
	    	vm.state.packaging.selected = true;
	    	vm.state.packaging.size = size;

	    	$log.info('got this size, ', vm.pricing.packaging[size].title);

	    	//change the active tab
	    	vm.changeTab()(1);
	    }

	}

	return  directive;
		
};