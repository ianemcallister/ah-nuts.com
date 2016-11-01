/* ToolBar.directive.js */

/**
* @desc toolbar directive that is used on the main page across the entire app.
* @example <div tool-bar></div>
*/

angular
	.module('ahNutsWebApp')
	.directive('aquisitionManager', aquisitionManager);

/* @ngInject */
function aquisitionManager() {
	var directive = {
		restrict: 'AECM',
		templateUrl: 'views/directives/aquisitionManager.directive.htm',
		replace: true,
		scope: {
			state: "="
		},
		link: linkFunc,
		controller: aquisitionManagerController,
		controllerAs: 'vm',
		bindToController: true
	}

	/* @ngInject */
	function linkFunc(scope, el, attr, ctrl) {
    }

    aquisitionManagerController.$inject = ['$scope', '$log'];
    /* @ngInject */
    function aquisitionManagerController($scope, $log) {
	    
    	//local variables
	    var vm = this;

	    //view model methods
	    vm.methodClicked = function(method) {
	    	//local variables
	    	var opposite = '';

	    	//activate addressed
	    	vm.state.buttons.aquisition.addressed = true;

	    	//select the proper option
	    	vm.state.buttons.aquisition[method].selected = true;
	    	vm.state.buttons.aquisition[method].classes['glyphicon-ok'] = true;

	    	//unselect the opposite
	    	if(method == 'pickup') opposite = 'ship';
	    	else opposite = 'pickup';

	    	vm.state.buttons.aquisition[opposite].selected = false;
	    	vm.state.buttons.aquisition[opposite].classes['glyphicon-ok'] = false;
	    }
	}

	return  directive;
		
};