/* ToolBar.directive.js */

/**
* @desc toolbar directive that is used on the main page across the entire app.
* @example <div tool-bar></div>
*/

angular
	.module('ahNutsWebApp')
	.directive('shoppingProgressBar', shoppingProgressBar);

/* @ngInject */
function shoppingProgressBar() {
	var directive = {
		restrict: 'AECM',
		templateUrl: 'views/directives/shoppingProgressBar.directive.htm',
		replace: true,
		scope: {
			activeTab: '=',
			changeTab: '&'
		},
		link: linkFunc,
		controller: shoppingProgressBarController,
		controllerAs: 'vm',
		bindToController: true
	}

	/* @ngInject */
	function linkFunc(scope, el, attr, ctrl) {
		//needs to listen for changes in active tab, as other directives
		//can prompt these changes
		scope.$watch('vm.activeTab', function(next, current) {
			console.log('the tab changed', current, next);
			//update styles
	    	scope.vm.changeTabClass(next, current);

		});
    }

    shoppingProgressBarController.$inject = ['$scope', '$log', 'stateFactory'];
    /* @ngInject */
    function shoppingProgressBarController($scope, $log, stateFactory) {
	    var vm = this;

	    //view model variables
	    vm.tabs = stateFactory.defaultState('shoppingProgressBar');

	    //view model functions
	    vm.changeTabClass = function(next, current) {
	    	//update styles
	    	vm.tabs[current].classes.spbtabSelected = false;
	    	vm.tabs[next].classes.spbtabSelected = true;	    	
	    }

	    vm.tabClick = function(tab) {

	    	//update the styles
	    	vm.changeTabClass(tab, vm.activeTab);

	    	//update parent model
	    	vm.changeTab()(tab);
	    }
	}	

	return  directive;
		
};