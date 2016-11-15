/* ToolBar.directive.js */

/**
* @desc toolbar directive that is used on the main page across the entire app.
* @example <div tool-bar></div>
*/

angular
	.module('ahNutsWebApp')
	.directive('emailHelper', emailHelper);

/* @ngInject */
function emailHelper() {
	var directive = {
		restrict: 'AECM',
		templateUrl: 'views/directives/emailHelper.directive.htm',
		replace: true,
		scope: {},
		link: linkFunc,
		controller: emailHelperController,
		controllerAs: 'vm',
		bindToController: true
	}

	/* @ngInject */
	function linkFunc(scope, el, attr, ctrl) {
    }

    emailHelperController.$inject = ['$scope', '$log'];
    
    /* @ngInject */
    function emailHelperController($scope, $log) {
	    var vm = this;

	    //local variables
	    vm.answers = {
	    	name: {
	    		attempted: false,
	    		value:""
	    	},
	    	email: {
	    		attempted: false,
	    		value:""
	    	},
	    	message: {
	    		attempted: false,
	    		value:""
	    	}

	    }
	    vm.form = {
	    	name: {
	    		error: {
	    			'display': false,
	    			'message':'This is a test'
	    		},
	    		classes: {}
	    	},
	    	email: {
	    		error: {
	    			'display': false,
	    			'message':'This is a test'
	    		},
	    		classes: {}
	    	},
	    	message: {
	    		error: {
	    			'display': false,
	    			'message':'This is a test'
	    		},
	    		classes: {}	    		
	    	},
	    	btn: {
	    		classes: {
	    			"btn-primary": false,
	    			"btn-warning": true,
	    			"btn-success": false
	    		}
	    	}
	    }

	    //local methods
	    function lengthChecker(string, required) {
	    	var trueOrFalse = false;

	    	if(string.length >= required) trueOrFalse = true;

	    	return trueOrFalse;
	    }
	    /*
	    *	the name field should be at least 3 characters long
	    */
	    function validateName() {}
	    function validateEmail() {}
	    function validateMessage() {}

	    //view model methods
	    vm.checkName = function(string) {

	    	//check for length
	    }

	    vm.nameAttempt = function(string) {
	    	//throw the attempted flag
	    	vm.answers.name.attempted = true;

	    	//make sure the appropriate length was reached
	    	if(lengthChecker(string, 3)) {
	    		//if the name is long enough,
	    		$log.info("good check");
	    	} else {
	    		$log.info('too short')
	    	}
	    }

	    vm.submitMessage = function() {



	    }
	}

	return  directive;
		
};