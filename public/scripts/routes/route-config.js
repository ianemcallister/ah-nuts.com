angular
    .module('ahNutsWebApp')
    .config(config);
/* @ngInject */
function config($routeProvider) {   
    $routeProvider
    //define the landing page
    .when('/', {
        templateUrl: 'views/landingPage.htm',
        controller: 'landingController',
        controllerAs: 'vm'
    })
    //define the shopping routes
    .when('/shop', {
        templateUrl: 'views/shopping.htm',
        controller: 'shoppingController',
        controllerAs: 'vm'
    })
    .when('/shop/receipt', {
        templateUrl: 'views/orderReceipt.htm',
        controller: 'shoppingReceiptController',
        controllerAs: 'vm'
    })
    //define the locations routes
    .when('/locations', {
        templateUrl: 'views/locations.htm',
        controller: 'locationsController',
        controllerAs: 'vm'
    })    
    .when('/locations/:state', {
        templateUrl: 'views/locations.htm',
        controller: 'locationsController',
        controllerAs: 'vm'
    })
    .when('/locations/:state/:region', {
        templateUrl: 'views/locations.htm',
        controller: 'locationsController',
        controllerAs: 'vm'
    })
    //define the contact routes
    .when('/contact', {
        templateUrl: 'views/contact.htm',
        controller: 'contactController',
        controllerAs: 'vm'
    })
    .when('/admin/server/test', {
        templateUrl: 'views/admin.htm',
        controller: 'adminController',
        controllerAs: 'vm'
    });
}
