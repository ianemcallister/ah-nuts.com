angular
    .module('ahNutsWebApp')
    .factory('shoppingCartsFactory', shoppingCartsFactory);

shoppingCartsFactory.$inject = ['$log'];

/* @ngInject */
function shoppingCartsFactory($log) {

	//TEMPORARY OBJECT
	var allCartElements = {
		items: [
			{
				description:"Small: SR Pecans & SR Cashews",
				qty: 5,
				cost: 700
			}
		],
		/*selectedPackaging: {
			smalls: 0,
			mediums: 0,
			larges: 0,
			platters: 0
		},
		filledPackaging: {
			smalls: {
				qty: 0,
				mixes: [],
				subtotal: 0
			},
			mediums:  {
				qty: 0,
				mixes: [],
				subtotal: 0
			},
			larges:  {
				qty: 0,
				mixes: [],
				subtotal: 0
			},
			platters:  {
				qty: 0,
				mixes: [],
				subtotal: 0
			}
		},*/
		cost: {
			subtotal: 3500,
			taxes: 0,
			discounts: 0,
			shipping: {

			}
		},
		addASize: addASize,
		removeASize: removeASize,
		addFilledPackage: addFilledPackage,
		removeAPackage: removeAPackage,
		calculateItemSubtotal: calculateItemSubtotal,
		calculateTotalCost: calculateTotalCost
	};

	function addASize(startingValue) {
		//TODO: REMOVE THIS LATER
		//notify the user what is coming in and what is going out
		$log.info('got this', startingValue, ' returning this ', startingValue + 1);

		//incriment the starting value 
		return startingValue + 1;
	}
	function removeASize(startingValue) {
		
		if(startingValue > 0) {
			//TODO: REMOVE THIS LATER
			//notify the user what is coming in and what is going out
			$log.info('got this', startingValue, ' returning this ', startingValue - 1);

			//incriment the starting value 
			return startingValue - 1;
		} else return 0;		
	}
	function addFilledPackage(newPackage) {
		$log.info('adding a new package now', newPackage);
	}
	function removeAPackage(size, id) {}

	function calculateItemSubtotal(item) {
		
		//declare local variable
		var subtotal = ((item.cost * item.qty) / 100).toFixed(2);

		return subtotal;
	}

	function calculateTotalCost(allItems) {

		//decalre local variable
		var total = 0;

		allItems.forEach(function(item) {
			total += ((item.cost * item.qty) / 100);
		});	

		$log.info('got this total', total);

		return total.toFixed(2);
	}
	
	return allCartElements;

}