/* ToolBar.directive.js */

/**
* @desc toolbar directive that is used on the main page across the entire app.
* @example <div tool-bar></div>
*/

angular
	.module('ahNutsWebApp')
	.directive('locationsToday', locationsToday);

/* @ngInject */
function locationsToday() {
	var directive = {
		restrict: 'AECM',
		templateUrl: 'views/directives/locationsToday.directive.htm',
		replace: true,
		scope: {
			selectedLocation: "="
		},
		link: linkFunc,
		controller: locationsTodayController,
		controllerAs: 'vm',
		bindToController: true
	}

	/* @ngInject */
	function linkFunc(scope, el, attr, ctrl) {
    }

    locationsTodayController.$inject = ['$scope', '$log'];
    /* @ngInject */
    function locationsTodayController($scope, $log) {
	    
	    //define the local variables
	    var vm = this;

	    //view model variables
	    vm.eventsToday = false;

	    //define local methods
	    function getTodaysLocationsList(allEvents) {

	    	var listOfEvents = [];

	    	//unpack frequency
	    	Object.keys(allEvents).forEach(function(frequencyKey) {

	    		//define local variable
	    		var frequency = allEvents[frequencyKey];

	    		//unpack events
	    		Object.keys(frequency).forEach(function(eventKey) {

	    			//define local variables
	    			var anEvent = frequency[eventKey];
	    			var today = new Date();
	    			var weekday = today.getDay();

	    			$log.info('weekeday', weekday);

	    			if(anEvent.weekday == weekday) {
		    			
	    				vm.eventsToday = true;

		    			var eventObject = {
		    				'start': '64800000',
		    				'end': '64800000',
		    				'name': anEvent.name,
		    				'address': '147 W. Center Street, Anaheim'
		    			};

		    			listOfEvents.push(eventObject);
	    			}

	    		});

	    	});

	    	return listOfEvents;
	    }

	    function init() {

	    	//build the list of events
	    	vm.eventsList = getTodaysLocationsList(vm.selectedLocation);

	    	vm.todaysDate = new Date();

	    	$log.info(vm.todaysDate);
	    }

	    //log the initial values to the user
	    $log.info('vm.selectedLocation', vm.selectedLocation);

	    //init this directive
	    init();
	    
	}

	return  directive;
		
};