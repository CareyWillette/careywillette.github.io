angular.module('myWeb', [])
    .controller('MainCtrl', function($scope, $location, $anchorScroll) {
        $scope.scrollTo = function(id) {
        $location.hash(id);
        console.log($location.hash());
        $anchorScroll();
      };
});