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

	    //local methods
	    function selectABtn(index) {
	    	vm.flavors[index].classes.availProductFlavor = false;
	    	vm.flavors[index].classes.selectedProductFlavor = true;
	    	vm.flavors[index].classes.unAvailProductFlavor = false;
	    }

	    function unselectABtn(index) {
	    	vm.flavors[index].classes.availProductFlavor = true;
	    	vm.flavors[index].classes.selectedProductFlavor = false;
	    	vm.flavors[index].classes.unAvailProductFlavor = false;	    	
	    }
	    function makeBtnAvail(index) {}
	    function makeBtnUnAvail(index) {}

	    //view model methods
	    vm.clickAFlavor = function(index) {
	    	
	    	//define local variable
	    	var adding = false;

	    	//when a flavor is clicked must
	    	//check if it is allowed to be clicked
	    	//flip the selected state
	    	vm.flavors[index].selected = !vm.flavors[index].selected;

	    	//set the class
	    	if(vm.flavors[index].selected) {
	    		//update the btn state
	    		selectABtn(index);
	    		//addition or subtraction 
	    		adding = true;
	    	}
	    	else {
	    		//update the btn state
	    		unselectABtn(index);
	    	}

	    	//pass the flavor up to the parent
	    	vm.pickAFlavor()(index, adding);
	    }
	}

	return  directive;
		
};