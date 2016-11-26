angular
    .module('ahNutsWebApp')
    .factory('locationsFilter', locationsFilter);

locationsFilter.$inject = ['$log'];

/* @ngInject */
function locationsFilter($log) {

	var locationsFilterObject = {
		weekly:weekly
	};

	function weekly(locations, week) {
		return ['test', 'testing', 'awesome'];
	}

	return locationsFilterObject;
}