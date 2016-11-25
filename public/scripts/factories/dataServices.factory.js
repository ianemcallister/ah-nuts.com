angular
    .module('ahNutsWebApp')
    .factory('dataServices', dataServices);

dataServices.$inject = ['$log'];

/* @ngInject */
function dataServices($log) {

	var dataServicesObject = {

	};

	return dataServicesObject;
}