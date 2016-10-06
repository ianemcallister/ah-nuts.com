angular
    .module('ahNutsWebApp')
    .config(config);
/* @ngInject */
function config($routeProvider) {   
    $routeProvider
    .when('/', {
        templateUrl: 'views/landingPage.htm',
        controller: 'landingController',
        controllerAs: 'vm'
    })
    .when('/locations', {
        templateUrl: 'views/locations.htm',
        controller: 'locationsController',
        controllerAs: 'vm'
    })
    .when('/shop', {
        templateUrl: 'views/shopping.htm',
        controller: 'shoppingController',
        controllerAs: 'vm'
    })
    .when('/contact', {
        templateUrl: 'views/contact.htm',
        controller: 'contactController',
        controllerAs: 'vm'
    });
}
