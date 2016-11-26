angular
    .module('ahNutsWebApp')
    .factory('backend', backend);

backend.$inject = ['$log', '$http'];

/* @ngInject */
function backend($log) {

	var backendComElements = {
		get: get,
		getLocations: getLocations
	};

	function _get(url) {
		return fetch(url);
	}

	function _getJSON(url) {
		return _get(url).then(function(response) {
			return response.json();
		});
	}

	function get() {
		
		return new Promise(function(resolve, reject) {
			


		});
	}

	function getLocations() {

		return new Promise(function(resolve, reject) {

			_getJSON('/api/get/list/regions').then(function(response) {
				
				//notify the user
				//$log.info('success:', response);

				//pass the response back
				resolve(response);

			}).catch(function(e) {

				$log.info('error:', e);

				reject(e);

			});

		});

	}

	return backendComElements;

}