angular
    .module('ahNutsWebApp')
    .controller('locationsController', locationsController);

locationsController.$inject = ['$log', '$routeParams', '$location', 'backendComFactory'];

/* @ngInject */
function locationsController($log, $routeParams, $location, backendComFactory) {

	//define view model variable
	var vm = this;
	var backend = backendComFactory;

	//view model variables
	vm.locationsModel = {};

	//local methods
	function _downloadLocations() {
		//download locations model
		backend.getLocations().then(function(response) {
			
			$log.info('got this in locations controller', response);
			
			//set the vm variable
			vm.locationsModel = response;

		
		}).catch(function(e) {	
			$log.info('there was an error', e);
		});
	}

	function _setRegion() {
		//if there is a region, don't need the location finder
		vm.state.regionFinder.visable = false;
		vm.state.locationLabel.visable = true;
		vm.state.locationsToday.visable = false;
		vm.state.locationsThisWeek.visable = true;
		vm.state.locationsChronoView.visable = false;

	}

	function init() {

		//update the model for the view with the lastest location informaiton from the server
		_downloadLocations();

		//build required models
	 	vm.selectedLocation = {
			state: $routeParams.state,
			region: $routeParams.region
		};

		vm.state = {
			regionFinder: {
				visable: true
			},		
			locationLabel: {
				visable: false
			},
			everyDayLocations: {
				visable: false
			},
			eventsAndMarkets: {
				visable: true
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
		$log.info('vm.locationsModel', vm.locationsModel);

		//check for paramaters
		//is there a state param?
		if(typeof $routeParams.state != 'undefined') {

			//check if that state is valid

			$log.info('found a state');

			_setRegion();



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

	//initialize the controller
	init();
}