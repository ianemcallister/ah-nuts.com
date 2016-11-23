angular
    .module('ahNutsWebApp')
    .factory('backendComFactory', backendComFactory);

backendComFactory.$inject = ['$log', '$http'];

/* @ngInject */
function backendComFactory($log) {

	var backendComElements = {
		get: get,
		getLocations: getLocations
	};

	function get() {
		return new Promise(function(resolve, reject) {
			resolve('it worked');

		});
	}

	function getLocations() {
		var allLocations = {
	    	"CA": {
	    		"name": "California",
	    		"distributors": {},
	    		"events": {
	    			"daily": {},
	    			"weekly": {
	    				0: {
	    					"name": "Bixby Park Farmers Market",
	    					"location": {},
	    					"schedule": [
	    						{
	    							"startDate":"",
	    							"finishDate": "",
	    							"startTime": "",
	    							"finsihTime": ""
	    						}
	    					]
	    				},
	    				1: {
	    					"name": "USC Farmers Market",
	    					"location": {},
	    					"schedule": [
	    						{
	    							"startDate":"",
	    							"finishDate": "",
	    							"startTime": "",
	    							"finsihTime": ""
	    						}
	    					]
	    				},
	    				2: {
	    					"name": "Downtown Anaheim Farmers Market",
	    					"location": {},
	    					"schedule": [
	    						{
	    							"startDate":"",
	    							"finishDate": "",
	    							"startTime": "",
	    							"finsihTime": ""
	    						}
	    					]
	    				},
	    				3: {
	    					"name": "Huntington Beach Pier Farmers Market",
	    					"location": {},
	    					"schedule": [
	    						{
	    							"startDate":"",
	    							"finishDate": "",
	    							"startTime": "",
	    							"finsihTime": ""
	    						}
	    					]
	    				},
	    				4: {
	    					"name": "Redondo Beach Farmers Market",
	    					"location": {},
	    					"schedule": [
	    						{
	    							"startDate":"",
	    							"finishDate": "",
	    							"startTime": "",
	    							"finsihTime": ""
	    						}
	    					]
	    				}
	    			},
	    			"quarterly": {},
	    			"yearly": {},
	    			"oneOff": {}
	    		}
	    	},
	    	"OR": {
	    		"name": "Oregon",
	    		"distributors": {},
	    		"events": {
	    			"daily": {},
	    			"weekly": {
	    				0: {
	    					"name": "Beaverton Farmers Market",
	    					"location": {},
	    					"schedule": [
	    						{
	    							"startDate":"",
	    							"finishDate": "",
	    							"startTime": "",
	    							"finsihTime": ""
	    						}
	    					]
	    				}
	    			},
	    			"quarterly": {},
	    			"yearly": {}
	    		}
	    	},
	    	"UT": {
	    		"name": "Utah"
	    	}
	    };

		return allLocations;
	}

	return backendComElements;

}