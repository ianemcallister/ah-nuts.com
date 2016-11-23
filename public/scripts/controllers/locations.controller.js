angular
    .module('ahNutsWebApp')
    .controller('locationsController', locationsController);

locationsController.$inject = ['$log', '$routeParams', '$location'];

/* @ngInject */
function locationsController($log, $routeParams, $location) {

	//define view model variable
	var vm = this;

	vm.selectedState = $routeParams.state;
	vm.statesObject = {
		"CA": "California",
		"OR": "Oregon",
		"UT": "Utah"
	}

	vm.state = {
		regionFinder: {
			visable: true
		},
		locationLabel: {
			visable: false
		},		
		locationsToday: {
			visable: false
		},
		locationsThisWeek: {
			visable: false
		},
		locationsChronoView: {
			visable: false
		}
	}

	//notify the params for the time being	TODO: TAKE THIS OUT LATER
	$log.info('params are: ', $routeParams);

	//local methods
	function setRegion() {
		//if there is a region, don't need the location finder
		vm.state.regionFinder.visable = false;
		vm.state.locationLabel.visable = true;
		vm.state.locationsToday.visable = true;
		vm.state.locationsThisWeek.visable = true;
		vm.state.locationsChronoView.visable = true;

	}

	function init() {

		//check for paramaters
		//is there a state param?
		if(typeof $routeParams.state != 'undefined') {

			$log.info('found a state');

			setRegion();

			//is there a region?
			if(typeof $routeParams.region != 'undefined') {
				$log.info('found a region');
			} else { 
				$log.info('NO region');
			}

		} else {
			$log.info('NO state');
		}

	}

	//view methods
	vm.locationRedirect = function(state, region) {
		
		var fullPath = 'locations/';

		//notify the user fo the state
		$log.info('got this, state.id:', state);
		//$log.info('got this, regionID:', regionID);

		//build the path
		fullPath = fullPath + state.id;

		//redirect
		$location.path(fullPath);
	}

	//init
	init();
}