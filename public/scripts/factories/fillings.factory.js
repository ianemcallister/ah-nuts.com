angular
    .module('ahNutsWebApp')
    .factory('fillingsFactory', fillingsFactory);

fillingsFactory.$inject = ['$log'];

/* @ngInject */
function fillingsFactory($log) {

	//TEMPORARY OBJECT
	var allFillings = {
    	packaging: undefined,
    	flavors: {
    		0: "Secret Recipe Pecans",
    		1: "Drunken Pecans",
    		2: "Cinnamon Pecans",
    		3: "Secret Recipe Almonds",
    		4: "Cinnamon Pecans",
    		5: "Secret Recipe Cashews",
    		6: "Secret Recipe Peanuts"
    	}
    	/*flavors: {
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
    	},*/

    };
	
	return allFillings;

}