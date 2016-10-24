/* ToolBar.directive.js */

/**
* @desc toolbar directive that is used on the main page across the entire app.
* @example <div tool-bar></div>
*/

angular
	.module('ahNutsWebApp')
	.directive('packagingFiller', packagingFiller);

/* @ngInject */
function packagingFiller() {
	var directive = {
		restrict: 'AECM',
		templateUrl: 'views/directives/packagingFiller.directive.htm',
		replace: true,
		scope: {
			currentlyFilling: "="
		},
		link: linkFunc,
		controller: packagingFillerController,
		controllerAs: 'vm',
		bindToController: true
	}

	/* @ngInject */
	function linkFunc(scope, el, attr, ctrl) {
    }

    packagingFillerController.$inject = ['$scope', '$log'];
    /* @ngInject */
    function packagingFillerController($scope, $log) {
	    var vm = this;

	    function equalSplit(divisions) {
	    	return 1 / divisions;
	    }

	    function assignEqualSplit(equalPortion) {

	    	Object.keys(vm.currentlyFilling.flavors.selected).forEach(function(flavor) {
	    		
	    		if(vm.currentlyFilling.flavors.selected[flavor])
	    			vm.currentlyFilling.flavors.proportions[flavor] = equalPortion;
	    		else
	    			vm.currentlyFilling.flavors.proportions[flavor] = 0.00

	    	})

	    	$log.info(vm.currentlyFilling.flavors.proportions);
	    }

	    //viewmodel methods
	    vm.pickAFlavor = function(flavor) {

	    	//first flip the checkbox
	    	vm.currentlyFilling.flavors.selected[flavor] = !vm.currentlyFilling.flavors.selected[flavor];

	    	//increase or decrease the number of flavors based on the sign
	    	if(vm.currentlyFilling.flavors.selected[flavor])
	    		vm.currentlyFilling.flavors.noOfFlavors++;
	    	else
	    		vm.currentlyFilling.flavors.noOfFlavors--;

	    	//then for equal split calculate the percentage, based on the number of flavors
	    	var equalPortions = equalSplit(vm.currentlyFilling.flavors.noOfFlavors);
	    	assignEqualSplit(equalPortions);

	    	//notify the user
	    	$log.info('# of Flavors', vm.currentlyFilling.flavors.noOfFlavors, "split", equalPortions, 'propritions', vm.currentlyFilling.flavors.proportions);
	    }

	}

	return  directive;
		
};