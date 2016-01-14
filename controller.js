angular.module('myWeb', [])
    .controller('MainController', function($scope) {
        
    });
    
    .config(function($routeProvider, $locationProvider) {

        $routeProvider
            .when('/', {
                templateUrl : 'partials/home.html',
                controller : MainController
            })
            .when('/about', {
                templateUrl : 'partials/about.html',
                controller : MainController
            })
            .when('/contact', {
                templateUrl : 'partials/contact.html',
                controller : MainController
            });
    
        // use the HTML5 History API
        $locationProvider.html5Mode(true);
    });
 
 
