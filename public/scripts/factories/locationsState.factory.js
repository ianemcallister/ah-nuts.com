angular
    .module('ahNutsWebApp')
    .factory('locationsState', locationsState);

locationsState.$inject = ['$log'];

/* @ngInject */
function locationsState($log) {

	var locationsStateObject = {
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
		},
		state: state
	};

	function state(id, locations) {

		//$log.info('id', id);
		//$log.info('locations', locations);

		if(id != undefined) {
			locationsStateObject.regionFinder.visable = false;
			locationsStateObject.locationLabel.visable = true;
			locationsStateObject.locationsToday.visable = false;
			locationsStateObject.locationsThisWeek.visable = true;
			locationsStateObject.locationsChronoView.visable = false;
		} else {
			locationsStateObject.regionFinder.visable = true;
			locationsStateObject.locationLabel.visable = false;
			locationsStateObject.locationsToday.visable = false;
			locationsStateObject.locationsThisWeek.visable = true;
			locationsStateObject.locationsChronoView.visable = false;			
		}

		//$log.info('locationsStateObject', locationsStateObject);

		return locationsStateObject;
	}

	return locationsStateObject;
}