var spaApp = angular.module('myApp');
spaApp.config(function($routeProvider){
   $routeProvider
       .when('/searchBuses',{templateUrl:'views/searchBuses/searchBuses.html'})
       .when('/availableBuses',{templateUrl:'views/availableBuses/availableBuses.html'})
       .when('/bookBus',{templateUrl:'views/bookBus/bookBus.html'})
    .otherwise( { redirectTo: '/' } );   
}); 