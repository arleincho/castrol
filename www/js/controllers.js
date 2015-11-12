angular.module('castrol.controllers', [])


.controller('IntroCtrl', function($scope,  $ionicSlideBoxDelegate) {
    // cordova.plugins.Keyboard.disableScroll(true);
    $scope.next = function() {
        $ionicSlideBoxDelegate.next();
    };

    $scope.previous = function() {
        $ionicSlideBoxDelegate.previous();
    };

    $scope.slideChanged = function(index) {
        $scope.slideIndex = index;
    };
})
