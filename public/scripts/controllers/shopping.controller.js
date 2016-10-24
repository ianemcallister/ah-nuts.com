angular
    .module('ahNutsWebApp')
    .controller('shoppingController', shoppingController);

shoppingController.$inject = ['$log', 'shoppingCartsFactory'];

/* @ngInject */
function shoppingController($log, shoppingCartsFactory) {

	//define the local variable
	var vm = this;

	//declare local variables
    vm.currentlyFilling = {
    	packaging: undefined,
    	flavors: {
    		noOfFlavors: 0,
    		selected: {
	    		SRPecans: false,
	    		DRPecans: false,
	    		CNPecans: false,
	    		SRAlmond: false,
	    		CNAlmond: false,
	    		SRCashew: false,
	    		SRPeanut: false
    		},
    		proportions: {
	    		SRPecans: 0.00,
	    		DRPecans: 0.00,
	    		CNPecans: 0.00,
	    		SRAlmond: 0.00,
	    		CNAlmond: 0.00,
	    		SRCashew: 0.00,
	    		SRPeanut: 0.00
    		}
    	}
    };

	//add the shopping cart to this controller, for access from directives
	vm.cart = shoppingCartsFactory;

}