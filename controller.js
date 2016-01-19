angular.module('myWeb', ['ngRoute'])
    .controller('MainCtrl', function($scope, $location, $anchorScroll) {
      $scope.scrollTo = function(id) {
        $location.hash(id);
        console.log($location.hash());
        $anchorScroll();
      };
    })
    .controller('NodeDroneCtrl', function($scope, $location, $anchorScroll) {
      $scope.scrollTo = function(id) {
        $location.hash(id);
        console.log($location.hash());
        $anchorScroll();
      };
      $scope.testTime = new Date();
    })
  .config(function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/nodedrone', {
        templateUrl: '/projects/nodedrone.html',
        controller: 'NodeDroneCtrl'
      })
      .otherwise('/')
		$locationProvider.html5Mode(true);
  })
