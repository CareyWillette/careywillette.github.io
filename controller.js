angular.module('myWeb', [])
    app.controller('MainCtrl', function($scope, $location, $anchorScroll) {
        $scope.scrollTo = function(id) {
        $location.hash(id);
        console.log($location.hash());
        $anchorScroll();
      };
});