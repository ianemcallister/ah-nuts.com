angular
    .module('ahNutsWebApp')
    .controller('locationsController', locationsController);

locationsController.$inject = ['$log', '$routeParams'];

/* @ngInject */
function locationsController($log, $routeParams) {

	//define view model variable
	var vm = this;

	//notify the params for the time being	TODO: TAKE THIS OUT LATER
	$log.info('params are: ', $routeParams);

	//local methods

	//view methods
}