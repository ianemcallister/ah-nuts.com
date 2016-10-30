angular
    .module('ahNutsWebApp')
    .controller('shoppingController', shoppingController);

shoppingController.$inject = ['$log', 'shoppingCartsFactory', 'fillingsFactory', 'priceListFactory', 'stateFactory'];

/* @ngInject */
function shoppingController($log, shoppingCartsFactory, fillingsFactory, priceListFactory, stateFactory) {

	//define the local variable
	var vm = this;

	//import required objects
    vm.currentlyFilling = fillingsFactory;
	vm.cart = shoppingCartsFactory;
	vm.priceList = priceListFactory;

	//state tracking
	vm.currentState = stateFactory.defaultState('shopping');
	vm.currentState.flavorsBtnList = stateFactory.buildButtonList(
		//vm.currentlyFilling.flavors, 			//list
		//['selected', 'proportions'],			//options
		//{}, 		//state
	);

	$log.info(vm.currentState.flavorsBtnList);
	
	//view model functions

	//when a tab is selected change the tab
	vm.updateSelectedTab = function(tab) {
		vm.currentState.activeTab = tab;
		$log.info('changing to tab', vm.currentState.activeTab);
	}


}