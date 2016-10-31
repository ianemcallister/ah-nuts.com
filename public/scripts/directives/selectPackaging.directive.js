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
			currentlyFilling: '=',
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

	    vm.packagingList = {
	    	0: {
	    		"title": "Small",
	    		"volume": 4
	    	},
	    	1: {
	    		"title": "Average",
	    		"volume": 8
	    	},
	    	2: {
	    		"title": "Impressive",
	    		"volume": 16
	    	},
	    	3: {
	    		"title": "Platter",
	    		"volume": 20
	    	},	    		    		    	
	    };

	    vm.sizeBtnClicked = function(size) {

	    	vm.currentlyFilling.packaging = size;
	    	$log.info('got this size, ', size);

	    	//change the active tab
	    	vm.changeTab()(1);
	    }

	}

	return  directive;
		
};