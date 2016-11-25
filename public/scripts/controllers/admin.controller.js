angular
    .module('ahNutsWebApp')
    .controller('adminController', adminController);

adminController.$inject = ['$log', '$location'];

/* @ngInject */
function adminController($log, $location, $http) {
	var vm = this;
	vm.testText = {};

	function _get(url) {
		return fetch(url);
	}

	function _getJSON(url) {
		return _get(url).then(function(response) {
			return response.json();
		});
	}


	_getJSON('/api/get/list/regions').then(function(response) {
		$log.info(response);
		vm.testText = response;
	}).catch(function(e) {
		$log.info('got this error', e);
	})
}