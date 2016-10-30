angular
    .module('ahNutsWebApp')
    .factory('stateFactory', stateFactory);

stateFactory.$inject = ['$log'];

/* @ngInject */
function stateFactory($log) {

	//TEMPORARY OBJECT
	var statesFactory = {
		defaultState: defaultState,
		buildButtonList: buildButtonList
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

	function buildButtonList(/*list, options, states*/) {
		//declare local variable
		var returnObject = {
			0: {
				"title": "Secret Recipe Pecans",
				selected: false,
				proportion: 0.00,
				classes: {
					availProductFlavor: true,
					unAvailProductFlavor: false,
					selectedProductFlavor: false
				}
			},
    		1: {
    			"title": "Drunken Pecans",
				selected: false,
				proportion: 0.00,
				classes: {
					availProductFlavor: true,
					unAvailProductFlavor: false,
					selectedProductFlavor: false
				}
			},
    		2: {
    			"title": "Cinnamon Pecans",
				selected: false,
				proportion: 0.00,
				classes: {
					availProductFlavor: true,
					unAvailProductFlavor: false,
					selectedProductFlavor: false
				}
			},
    		3: {
    			"title": "Secret Recipe Almonds",
				selected: false,
				proportion: 0.00,
				classes: {
					availProductFlavor: true,
					unAvailProductFlavor: false,
					selectedProductFlavor: false
				}
			},
    		4: {
    			"title":"Cinnamon Pecans",
				selected: false,
				proportion: 0.00,
				classes: {
					availProductFlavor: true,
					unAvailProductFlavor: false,
					selectedProductFlavor: false
				}
			},    			
    		5: {
    			"title":"Secret Recipe Cashews",
				selected: false,
				proportion: 0.00,
				classes: {
					availProductFlavor: true,
					unAvailProductFlavor: false,
					selectedProductFlavor: false
				}
			},    			
    		6: {
    			"title":"Secret Recipe Peanuts",
				selected: false,
				proportion: 0.00,
				classes: {
					availProductFlavor: true,
					unAvailProductFlavor: false,
					selectedProductFlavor: false
				}
			}    			
		};

		return returnObject;
	}

	return statesFactory;

}