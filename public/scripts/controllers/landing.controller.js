angular
    .module('ahNutsWebApp')
    .controller('landingController', landingController);

landingController.$inject = ['$log', '$routeParams', '$location'];

/* @ngInject */
function landingController($log, $routeParams, $location) {

	//define view model variable
	var vm = this;

	//local methods
	function init() {
		//define the state of this page

	};

	//view methods
	vm.navButtonClicked = function(param) {
		var fullPath = '/' + param;
		//redirect
		$log.info('redirecting to: ' + fullPath);
		$location.path(fullPath);
	}

	//run init function
	init();
}