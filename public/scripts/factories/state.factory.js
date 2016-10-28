angular
    .module('ahNutsWebApp')
    .factory('stateFactory', stateFactory);

stateFactory.$inject = ['$log'];

/* @ngInject */
function stateFactory($log) {

	//TEMPORARY OBJECT
	var statesFactory = {
		defaultState: defaultState
	};
	
	function defaultState(section) {
		//declare local variable
		var returnObject;

		if(section=='shopping') {
			returnObject = {
				activeTab: 0,
				allTabs: {
					0: 'package',
					1: 'flavor',
					2: 'access',
					3: 'checkout'
				},
				sizeSelected: false
			}
		} else if(section=='shoppingProgressBar') {
			returnObject = {
				0: {
					classes: {
						spbtabSelected: true
					},
					styles: {}
				},
				1: {
					classes: {
						spbtabSelected: false
					},
					styles: {}
				},
				2: {
					classes: {
						spbtabSelected: false
					},
					styles: {}
				},
				3: {
					classes: {
						spbtabSelected: false
					},
					styles: {}
				}
			}
		}

		return returnObject;
	}

	return statesFactory;

}