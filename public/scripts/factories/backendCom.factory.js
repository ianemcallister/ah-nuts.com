angular
    .module('ahNutsWebApp')
    .factory('backendComFactory', backendComFactory);

backendComFactory.$inject = ['$log', '$http'];

/* @ngInject */
function backendComFactory($log) {

	var backendComElements = {
		get: get
	};

	function get() {
		return new Promise(function(resolve, reject) {
			resolve('it worked');

		});
	}

	return backendComElements;

}