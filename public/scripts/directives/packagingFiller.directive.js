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
			pricing: "=",
			changeTab: '&',
			productFlavorList: "=",
			currentlyFilling: "=",
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

	    }

	    function supplyMixtureObject(flavorProportions) {		//receive all the proprtions
	    	//initialize local variable
	    	var returnObject = {};

	    	//cycle through all the flavors, if proportion is great than 
	    	Object.keys(flavorProportions).forEach(function(flavor) {

	    		if(flavorProportions[flavor] > 0)
	    			returnObject[flavor] = flavorProportions[flavor]

	    	});

	    	return returnObject		//return a distilled list of proportions
	    }

	    function checkForPeanuts(packaging, mixture) {

	    	var hasPeanuts = undefined;

	    	//is this a mixture or a platter?
	    	if(packaging=='platter') {
	    		//a platter with at least one section of peanuts has peanuts
	    		if(mixture.SRPeanut > 0) hasPeanuts = true;
	    		else hasPeanuts = false;

	    	} else {
	    		//a mixture must have at least 50% peanuts to be considered peanut
	    		if(mixture.SRPeanut >= 0.5) hasPeanuts = true;
	    		else hasPeanuts = false;
	    	}

	    	return hasPeanuts;
	    }

	    function calculatePurchasePrice(packaging, mixture) {
	    	
	    	//define the local variable
	    	var salePrice = 0;
	    	var peanutStatus = 'withoutPeanuts';
	    	var peanutSections = 0;

	    	//determine peanuts presence and qty
	    	var peanutsArePresent = checkForPeanuts(packaging, mixture);

	    	if(peanutsArePresent) {
	    		//set the object value
	    		peanutStatus = 'withPeanuts';
	    		//calculate the number of peanut sections
	    		peanutSections = mixture.SRPeanut * 4;
	    	}

	    	//packaging differs for platters and bags
	    	if(packaging=='platter') {
	    		salePrice = vm.pricing[peanutStatus][packaging][peanutSections];
	    	} else {
	    		salePrice = vm.pricing[peanutStatus][packaging];
	    	}

	    	return salePrice;
	    }

	    function calculateItemSubtotal(packaging, mixture, qty) {

	    	var purchasePrice = calculatePurchasePrice(packaging, mixture);

	    	return purchasePrice * qty;
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

	    vm.addToCart = function() {		//add the current item to the cart
	    	
	    	//distill the mixture
	    	var thisPackaging = vm.currentlyFilling.packaging;
	    	var thisMixture = supplyMixtureObject(vm.currentlyFilling.flavors.proportions);
	    	var thisQuantity = vm.qty;

	    	//format the object to be added to the cart
	    	var newPackage = {
	    		selectedPackaging: thisPackaging,
	    		mixture: thisMixture,
	    		qty: thisQuantity,
	    		subtotatl: calculateItemSubtotal(thisPackaging, thisMixture, thisQuantity)
	    	};

	    	//pass it to the cart
	    	vm.addFilledPackage()(newPackage);

	    	//then move to the next tab
	    	vm.changeTab()(2);
	    }

	    vm.discardButtonClicked = function() {	//when the btn is clicked this happens
	    	
	    	//currently filling package set to undefined
	    	vm.currentlyFilling.packaging = undefined;

	    	//active tab switched back to 0
	    	vm.changeTab()(0);
	    }

	}

	return  directive;
		
};