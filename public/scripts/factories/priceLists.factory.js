angular
    .module('ahNutsWebApp')
    .factory('priceListFactory', priceListFactory);

priceListFactory.$inject = ['$log'];

/* @ngInject */
function priceListFactory($log) {

	//TEMPORARY OBJECT
	var allPrices = {
		packaging: {
			0: {
	    		"title": "Small",
	    		"volume": 4,
	    		"compartments": 1,
	    		"maxFlavors": 100
	    	},
	    	1: {
	    		"title": "Average",
	    		"volume": 8,
	    		"compartments": 1,
	    		"maxFlavors": 100
	    	},
	    	2: {
	    		"title": "Impressive",
	    		"volume": 16,
	    		"compartments": 1,
	    		"maxFlavors": 100
	    	},
	    	3: {
	    		"title": "Platter",
	    		"volume": 20,
	    		"compartments": 4,
	    		"maxFlavors": 4
	    	}
		},
		withPeanuts: {
			0: 500,
			1: 800,
			2: 1100,
			3: {
				1: 2000,
				2: 1800,
				3: 1600,
				4: 1400
			}
		},
		withoutPeanuts: {
			0: 700,
			1: 1300,
			2: 1800,
			3: {
				0: 2200
			}			
		},
		calculatePurchasePrice: calculatePurchasePrice
	};

	function calculatePurchasePrice(thisPackaging, thisPricing) {
		
		$log.info('Packaging:', thisPackaging);
		$log.info('Pricing:', thisPricing);
		
		//local variables
		var cost = 0;

		//first check for peanuts
		if(typeof thisPackaging.mix['6'] == 'undefined') {
			//peanuts are NOT present
			$log.info('no peanuts');
			//then check for size
			if(thisPackaging.size > 2) {
				//this is a platter
				cost = thisPricing.withoutPeanuts[thisPackaging.size.toString()]['0'];
			} else {
				//this is a cone
				cost = thisPricing.withoutPeanuts[thisPackaging.size.toString()];
			}
			
		} else {
			//peanuts are present
			$log.info('there are peanuts')
			//then check for size
			if(thisPackaging.size > 2) {
				//this is a platter
				//count sections of peanuts
				var peanutSections = 4 * thisPackaging.mix['6'];

				$log.info(peanutSections, 'peanutSections');
				
				cost = thisPricing.withPeanuts[thisPackaging.size.toString()][peanutSections.toString()];

			} else {
				//this is a cone
				//is it more or less than 50% peanuts?
				$log.info("% peanuts", thisPackaging.mix['6']);
				if(thisPackaging.mix['6'] >= 0.5) {
					//$log.info('peanuts price', thisPricing.withPeanuts[thisPackaging.size.toString()]);
					cost = thisPricing.withPeanuts[thisPackaging.size.toString()];
				} else {
					//$log.info('No Peanuts price', thisPricing.withoutPeanuts[thisPackaging.size.toString()]);
					cost = thisPricing.withoutPeanuts[thisPackaging.size.toString()];
				}
			}
		}

		return cost;
	}
	
	return allPrices;

}