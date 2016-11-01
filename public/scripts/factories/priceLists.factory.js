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
		flavors: {
    		0: "Secret Recipe Pecans",
    		1: "Drunken Pecans",
    		2: "Cinnamon Pecans",
    		3: "Secret Recipe Almonds",
    		4: "Cinnamon Almonds",
    		5: "Secret Recipe Cashews",
    		6: "Secret Recipe Peanuts"
    	},
        types: {
            0: "Pecans",
            1: "Pecans",
            2: "Pecans",
            3: "Almonds",
            4: "Almonds",
            5: "Cashews",
            6: "Peanuts"
        },
        recipies: {
            0: "Secret Recipe",
            1: "Drunken",
            2: "Cinnamon",
            3: "Secret Recipe",
            4: "Cinnamon",
            5: "Secret Recipe",
            6: "Secret Recipe"           
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
		_distillType:_distillType,
		_distillFlavors:_distillFlavors,
		calculatePurchasePrice: calculatePurchasePrice,
		buildDescription: buildDescription
	};

	function _distillType(ref, mix) {

		//define the local variables
		var typeObject = {};
		var noOfTypes = 0;
		var returnString;

		$log.info('mix', mix);

		//collect all the keys from the mix
		Object.keys(mix).forEach(function(key) {

			//use the keys to add nut types to a typeObject
			typeObject[ref[key]] = true;
		});

		//count the types in the type object now
		Object.keys(typeObject).forEach(function(key) {
			
			//incriment the number of types
			noOfTypes++;

			//save the type for later if need be
			returnString = key;
		});

		//if there are more than one type...
		if(noOfTypes > 1) {
			//it's a mix
			if(typeof mix[6] != 'undefined' && mix[6] >= 0.5) returnString = 'Peanut Mix';
			else returnString = 'Mix'

		} 

		//$log.info(typeObject);

		return returnString;
	}

	function _distillFlavors(ref, mix) {
		
		//define the local variables
		var flavorObject = {};
		var flavorsArray = [];
		var returnString;

		//collect all the keys from the mix
		Object.keys(mix).forEach(function(key) {

			//use the keys to add nut types to a flavorObject
			flavorObject[ref[key]] = true;
		});

		//build an array of types
		Object.keys(flavorObject).forEach(function(key) {

			flavorsArray.push(key);
		});		

		switch(flavorsArray.length) {
			case 1:
				returnString = flavorsArray[0];
				break;
			case 2:
				returnString = flavorsArray[0] + ' & ' + flavorsArray[1];
				break;
			case 3:
				returnString = flavorsArray[0] + ', ' + flavorsArray[1] + ' & ' + flavorsArray[2];
				break
			default:
				break;
		}

		return returnString;
	}

	function calculatePurchasePrice(thisPackaging, thisPricing) {
		
		//$log.info('Packaging:', thisPackaging);
		//$log.info('Pricing:', thisPricing);
		
		//local variables
		var cost = 0;

		//first check for peanuts
		if(typeof thisPackaging.mix['6'] == 'undefined') {
			//peanuts are NOT present
			//$log.info('no peanuts');
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
			//$log.info('there are peanuts')
			//then check for size
			if(thisPackaging.size > 2) {
				//this is a platter
				//count sections of peanuts
				var peanutSections = 4 * thisPackaging.mix['6'];

				//$log.info(peanutSections, 'peanutSections');
				
				cost = thisPricing.withPeanuts[thisPackaging.size.toString()][peanutSections.toString()];

			} else {
				//this is a cone
				//is it more or less than 50% peanuts?
				//$log.info("% peanuts", thisPackaging.mix['6']);
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
	
	function buildDescription(thisPackaging, thisPricing) {
		//$log.info('building a description');
		//$log.info('type', thisPackaging.mix);
		//$log.info('flavors', thisPackaging.mix);
		//$log.info('thisPricing', thisPricing);

		//define local variables
		var description = '';

		//determine the size (small, average, impressive, platter)
		description += thisPricing.packaging[thisPackaging.size.toString()].title;
		description += ": ";

		//determine the type (Pecans, Almonds, Cashews, Peanuts, Mix, Peanut Mix)
		description += _distillType(thisPricing.types, thisPackaging.mix);
		description += " (";

		//determine recipe (...)
		description += _distillFlavors(thisPricing.recipies, thisPackaging.mix);;
		description += ")";

		return description;
	}
	return allPrices;

}