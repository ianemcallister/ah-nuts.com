angular
    .module('ahNutsWebApp')
    .controller('shoppingController', shoppingController);

shoppingController.$inject = ['$log', 'shoppingCartsFactory'];

/* @ngInject */
function shoppingController($log, shoppingCartsFactory) {

	//define the local variable
	var vm = this;

	//add the shopping cart to this controller, for access from directives
	vm.cart = shoppingCartsFactory;

}