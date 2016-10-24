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
		removeAsize: removeAsize,
		fillAPackage: fillAPackage,
		removeAPackage: removeAPackage
	};

	function addASize(size) {

		

		$log.info('got this', size, ' returning this ', size +1);

		return size + 1;
	}
	function removeAsize(size) {}
	function fillAPackage(size) {}
	function removeAPackage(size, id) {}

	
	return allCartElements;

}