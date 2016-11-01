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
				packaging: {
					"selected": false,
					"size": undefined,
					"flavors": 0,
					"mix": {},
					"cost": 0
				},
				buttons: {
					flavorList: {
						0: {
							"title": "Secret Recipe Pecans",
							'type': 'Pecans',
							'recipe': 'Secret Recipe',
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
							'type': 'Pecans',
							'recipe': 'Drunken',
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
							'type': 'Pecans',
							'recipe': 'Cinnamon',
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
							'type': 'Almonds',
							'recipe': 'Secret Recipe',
							selected: false,
							proportion: 0.00,
							classes: {
								availProductFlavor: true,
								unAvailProductFlavor: false,
								selectedProductFlavor: false
							}
						},
			    		4: {
			    			"title":"Cinnamon Almonds",
							'type': 'Almonds',
							'recipe': 'Cinnamon',
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
							'type': 'Cashews',
							'recipe': 'Secret Recipe',
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
							'type': 'Peanuts',
							'recipe': 'Secret Recipe',
							selected: false,
							proportion: 0.00,
							classes: {
								availProductFlavor: true,
								unAvailProductFlavor: false,
								selectedProductFlavor: false
							}
						}    	
					},
					aquisition: {
						addressed: false,
						pickup: {
							selected: false,
							classes: {
								'glyphicon': true,
								'glyphicon-ok': false
							}
						},
						ship: {
							selected: false,
							classes: {
								'glyphicon': true,
								'glyphicon-ok': false
							}
						}
					}
				}
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