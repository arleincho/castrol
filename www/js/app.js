// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('castrol', ['ionic', 'ngCordova', 'castrol.controllers'])


.run(function($ionicPlatform, $cordovaSplashscreen, $window) {

    $ionicPlatform.ready(function() {
        if(window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            cordova.plugins.Keyboard.disableScroll(true);
        }
        
        if(window.StatusBar) {
          StatusBar.hide();
        }

        setTimeout(function() {
            $cordovaSplashscreen.hide();
        }, 2500);

        

    });

   
})



.config(function($stateProvider, $urlRouterProvider) {



    $stateProvider

    .state('intro', {
        url: '/',
        templateUrl: 'templates/intro.html',
        controller: 'IntroCtrl'
    })


    $urlRouterProvider.otherwise('/');

})





var changeLocation = function(url, forceReload, $scope, $location) {
    $scope = $scope || angular.element(document).scope();
    url = '#' + url;
    if(forceReload || $scope.$$phase) {
        window.location = url;
    } else {
        $location.path(url);
        $scope.$apply();
    }
};


var showLoading = function($ionicLoading) {
    $ionicLoading.show({
        template: 'Loading...'
    });
};


var hideLoading = function ($ionicLoading){
    $ionicLoading.hide();
};
