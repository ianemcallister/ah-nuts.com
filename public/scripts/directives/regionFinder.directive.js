/* ToolBar.directive.js */

/**
* @desc toolbar directive that is used on the main page across the entire app.
* @example <div tool-bar></div>
*/

angular
	.module('ahNutsWebApp')
	.directive('regionFinder', regionFinder);

/* @ngInject */
function regionFinder() {
	var directive = {
		restrict: 'AECM',
		templateUrl: 'views/directives/regionFinder.directive.htm',
		replace: true,
		scope: {
			locationRedirect: '&',
			states: "="
		},
		link: linkFunc,
		controller: regionFinderController,
		controllerAs: 'vm',
		bindToController: true
	}

	/* @ngInject */
	function linkFunc(scope, el, attr, ctrl) {
    }

    regionFinderController.$inject = ['$scope', '$log'];
    /* @ngInject */
    function regionFinderController($scope, $log) {
	    var vm = this;
	    	
	    //view model methods
	    vm.selectState = function(id) {
	    	$log.info('got this', vm.states[id]);

	    	//pass the id back up to the locations controller
	    	vm.locationRedirect()(vm.states[id]);
	    }

	}

	return  directive;
		
};