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
			cart: "=",
			pricing: "=",
			changeTab: '&',
			state: "=",
			addFilledPackage: "&"
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

	    //view model variables
	    vm.qty = 1;

	    function updatePackagingState() {
	    	//update the overall packaging
	    	vm.state.packaging.selected = false;
	    	vm.state.packaging.size = undefined;
	    	vm.state.packaging.flavors = 0;
	    	vm.state.packaging.mix = {};
	    	//update the flavor buttons
	    	Object.keys(vm.state.buttons.flavorList).forEach(function(flavor) {
	    		vm.state.buttons.flavorList[flavor].selected = false
	    		vm.state.buttons.flavorList[flavor].classes.availProductFlavor = true;
	    		vm.state.buttons.flavorList[flavor].classes.unAvailProductFlavor = false;
	    		vm.state.buttons.flavorList[flavor].classes.selectedProductFlavor = false;
	    	})
	    }

	    /*
	    *	Calculates an equal split between flavors
	    */
	    function equalSplit(divisions) {
	    	return 1 / divisions;
	    }

	    /*
	    *	If a flavor is being added, increase the number of flavors, vice-versa.
	    */
	    function updateFlavorCount(adding) {
	    	//update the total number of flavors
	    	if(adding) vm.state.packaging.flavors++;
	    	else vm.state.packaging.flavors--;	    	
	    }

	    /*
	    *	Update the mix of flavors based on the addition or subtraction of a flavor
	    */
	    function updateFlavorMix(flavor, adding) {
	    	
	    	//$log.info('got this flavor', flavor);
	    	
	    	var flavorTxt = flavor.toString();

	    	//is this addtion or subtraction?
	    	if(adding) {
	    		//if adding..
	    		//update the split on all the current flavors
	    		Object.keys(vm.state.packaging.mix).forEach(function(flavor) {
	    			vm.state.packaging.mix[flavor] = equalSplit(vm.state.packaging.flavors);
	    		});

	    		//then add the split to the new flavor
	    		vm.state.packaging.mix[flavorTxt] = equalSplit(vm.state.packaging.flavors);
	    		
	    	} else {
	    		//if subtracting..
	    		//update all the splits on the other flavors
	    		Object.keys(vm.state.packaging.mix).forEach(function(flavor) {
	    			vm.state.packaging.mix[flavor] = equalSplit(vm.state.packaging.flavors);
	    		});

	    		//then delete the desired flavor
	    		delete vm.state.packaging.mix[flavorTxt];

	    	}
	    }

	    /****************************************************************
	    *					VIEWMODEL METHODS							*
	    ****************************************************************/
	    /*
	    *	Add or remove that flavor from the mix, this involves
	    *		- Updating the total number of flavors
	    *		- Adding or removeing a value from/to the mix object
	    *			* If Adding then the split must be calculated
	    */
	    vm.pickAFlavor = function(flavor, adding) {
	    	
	    	//$log.info('got this flavor', flavor);

	    	//update the total number of flavors
	    	updateFlavorCount(adding);

	    	//update the mix
	    	updateFlavorMix(flavor, adding);
	    }

	    /*
	    *	When "Add To Cart" button is clicked, a new item is built, and added to the
	    *	cart object.
	    */
	    vm.addToCart = function(checkOut) {		//add the current item to the cart
	    	
	    	//define the local variables
	    	var thisPackaging = vm.state.packaging.size;
	    	var thisMixture = vm.state.packaging.mix;
	    	var thisQuantity = vm.qty;
	    	var thisCost = vm.pricing.calculatePurchasePrice(vm.state.packaging, vm.pricing);
	    	var thisDescription = "Small: SR Pecans & SR Cashews";
	    	
	    	//build the item
	    	var itemForPurchase = {
	    		description: thisDescription,
				packaging: thisPackaging,
				flavors: thisMixture,
				qty: thisQuantity,
				cost: thisCost
	    	}

	    	//pass it to the cart
	    	vm.cart.items.push(vm.addFilledPackage()(itemForPurchase));

	    	//update the state
	    	updatePackagingState();

	    	//then move to the next tab
	    	if(checkOut) vm.changeTab()(2);
	    	else vm.changeTab()(0);
	    }

	    /*
	    *	When this button is clicked the currently selected packaging is discarded
	    */
	    vm.discardButtonClicked = function() {	
	    	
	    	//currently filling package set to undefined
	    	updatePackagingState();

	    	//active tab switched back to 0
	    	vm.changeTab()(0);
	    }

	}

	return  directive;
		
};