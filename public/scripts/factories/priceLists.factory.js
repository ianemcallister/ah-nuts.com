angular
    .module('ahNutsWebApp')
    .factory('priceListFactory', priceListFactory);

priceListFactory.$inject = ['$log'];

/* @ngInject */
function priceListFactory($log) {

	//TEMPORARY OBJECT
	var allPrices = {
		withPeanuts: {
			small: 500,
			medium: 800,
			large: 1100,
			platter: {
				1: 2000,
				2: 1800,
				3: 1600,
				4: 1400
			}
		},
		withoutPeanuts: {
			small: 700,
			medium: 1300,
			large: 1800,
			platter: {
				0: 2200
			}			
		}
	};
	
	return allPrices;

}