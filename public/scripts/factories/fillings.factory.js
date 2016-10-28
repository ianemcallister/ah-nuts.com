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
	
	return allFillings;

}