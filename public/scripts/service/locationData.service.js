angular
    .module('ahNutsWebApp')
    .service('locationData', locationData);

locationData.$inject = ['$log', 'backend', 'firebase'];

/* @ngInject */
function locationData($log, backend, firebase) {
	var lists = {
		"states": 0
	};
	var _raw = {};
	var _states = [];

	this.set = function(variable, value) {
		this[variable] = value
	}

	this.download = function() {
		var ld = this;

		$log.info('loading Locaiton Data');

		//call database
		return new Promise(function(resolve, reject) {

			//call out the server
			backend.getLocations().then(function(response) {

				//save to _raw
				ld.set('_raw', response);

				//convert _raw to _states

				//save to _states
				ld.set('_states', ['California', 'Oregon']);

				//return the _states list
				resolve(response);				
				//resolve({'testing':'good test'})
				
			}).catch(function(error) {

			});

		});

	}

	this.getStates = function() {
		return _states;
	}

	this.getList = function(list) {
		var ld = this;

		//firebase.test();

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