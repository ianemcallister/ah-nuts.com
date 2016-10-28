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
    }

    shoppingProgressBarController.$inject = ['$scope', '$log', 'stateFactory'];
    /* @ngInject */
    function shoppingProgressBarController($scope, $log, stateFactory) {
	    var vm = this;

	    //view model variables
	    vm.tabs = stateFactory.defaultState('shoppingProgressBar');

	    //view model functions
	    vm.tabClick = function(tab) {

	    	//report click
	    	$log.info('clicked', tab);

	    	//update styles
	    	vm.tabs[vm.activeTab].classes.spbtabSelected = false;
	    	vm.tabs[tab].classes.spbtabSelected = true;

	    	//update parent model
	    	vm.changeTab()(tab);
	    }
	}	

	return  directive;
		
};