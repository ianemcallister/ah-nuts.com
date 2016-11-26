angular
    .module('ahNutsWebApp')
    .service('locationData', locationData);

locationData.$inject = ['$log', 'backend'];

/* @ngInject */
function locationData($log, backend) {
	var lists = {
		"states": 0
	};
	var _raw = {};
	var _states = [];

	this.download = function() {
		//call database
		return new Promise(function(resolve, reject) {

			//call out the server
			backend.getLocations().then(function(response) {

				//save to _raw

				//convert _raw to _states

				//save to _states

				//return the _states list
				resolve(response);				

			}).catch(function(error) {

			});

		});

	}

	this.getStates = function() {
		return _states;
	}

	this.getList = function(list) {
		var ld = this;

		switch(lists[list]) {
			case 0:
				//check the raw object
				if(_states.length === 0) {
					//if the object is empty download from the serve
					return new Promise(function(resolve, reject) {
						resolve(ld.download());
					});
				} else {
					//if it is not empty return the list that exists
					return new Promise(function(resolve, reject) {
						resolve(ld.getStates());
					});
				}
				break;
			default:
				$log.info('got the default case');
				break;
		};

	}

}