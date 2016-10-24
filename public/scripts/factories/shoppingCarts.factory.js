angular
    .module('ahNutsWebApp')
    .factory('shoppingCartsFactory', shoppingCartsFactory);

shoppingCartsFactory.$inject = ['$log'];

/* @ngInject */
function shoppingCartsFactory($log) {

	//TEMPORARY OBJECT
	var allCartElements = {
		selectedPackaging: {
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
		},
		cost: {
			subtotal: 0,
			taxes: 0,
			discounts: 0
		},
		addASize: addASize,
		removeASize: removeASize,
		fillAPackage: fillAPackage,
		removeAPackage: removeAPackage
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
	function fillAPackage(size) {}
	function removeAPackage(size, id) {}

	
	return allCartElements;

}