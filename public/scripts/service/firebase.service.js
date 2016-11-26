angular
    .module('ahNutsWebApp')
    .service('firebase', firebase);

firebase.$inject = ['$log'];

/* @ngInject */
function firebase($log) {

	this.test = function() {
		$log.info('in firebase');
		$log.info(AH_NUTS_FB_APIKEY);
		$log.info('got here in firebase');
	}

	this.init = function() {
		var config = {
			apiKey: AH_NUTS_FB_APIKEY,
			authDomain: AH_NUTS_FB_AUTHDOMAIN,
			databaseURL: AH_NUTS_FB_DATABASEURL,
			storageBucket: AH_NUTS_FB_STORAGEBUCKET
		};
		firebase.initializeApp(config);		
	}

}