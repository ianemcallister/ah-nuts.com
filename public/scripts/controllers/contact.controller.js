angular
    .module('ahNutsWebApp')
    .controller('contactController', contactController);

contactController.$inject = ['$log', '$location'];

/* @ngInject */
function contactController($log, $location) {
	var vm = this;

	//view model methods
	vm.returnHome = function(param) {
		var fullPath = '/'; //+ param;
		//redirect
		$log.info('redirecting to: ' + fullPath);
		$location.path(fullPath);
	}
}