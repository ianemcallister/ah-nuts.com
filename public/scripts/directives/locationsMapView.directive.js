/* ToolBar.directive.js */

/**
* @desc toolbar directive that is used on the main page across the entire app.
* @example <div tool-bar></div>
*/

angular
	.module('ahNutsWebApp')
	.directive('locationsMapView', locationsMapView);

/* @ngInject */
function locationsMapView() {
	var directive = {
		restrict: 'AECM',
		templateUrl: 'views/directives/locationsMapView.directive.htm',
		replace: true,
		scope: {},
		link: linkFunc,
		controller: locationsMapViewController,
		controllerAs: 'vm',
		bindToController: true
	}

	/* @ngInject */
	function linkFunc(scope, el, attr, ctrl) {
    }

    locationsMapViewController.$inject = ['$scope', '$log'];
    /* @ngInject */
    function locationsMapViewController($scope, $log) {
	    var vm = this;

	    /*function initMap() {
	        var uluru = {lat: -25.363, lng: 131.044};
	        var map = new google.maps.Map(document.getElementById('map'), {
	          zoom: 4,
	          center: uluru
	        });
	        var marker = new google.maps.Marker({
	          position: uluru,
	          map: map
	        });
	    }*/

	}

	return  directive;
		
};