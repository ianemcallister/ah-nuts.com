angular
    .module('ahNutsWebApp')
    .controller('locationsController', locationsController);

locationsController.$inject = ['$log', '$routeParams', '$location', 'locationsModel', 'locationsState'];

/* @ngInject */
function locationsController($log, $routeParams, $location, locationsModel, locationsState) {

	//define view model variable
	var vm = this;
	
	//view model variables
	vm.locationsModel = locationsModel;
	vm.selectedLocation = {
		state: $routeParams.state,
		region: $routeParams.region
	};
	vm.state = locationsState.state($routeParams.state, vm.locationsModel);

	//local methods

	//view methods
	vm.locationRedirect = function(state, region) {
		
		var fullPath = 'locations/';

		//notify the user fo the state
		//$log.info('got this, state.id:', state);
		//$log.info('got this, regionID:', regionID);

		//build the path
		fullPath = fullPath + state;

		//redirect
		$location.path(fullPath);
	}

}