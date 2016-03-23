
var listofBusResponse = "";
var bookingDone = "";
var cancelStatus = "";
 myapp.controller("SearchBuses", function($scope, myService,$location) {
     $scope.bannerVisibility = true;
     $scope.hideBanner = function() {
             $scope.bannerVisibility = false;
         }
     
     $scope.getdatafromFactory = function() {
           var data1 = {fromLocation: $scope.SourceCity,toDestination: $scope.destCity};  myService.fetchBusList(data1,"http://reservationsystem.cfapps.io/rest/searchfilter").success(function(data){
           listofBusResponse = data;
           $location.path("/availableBuses");
                
     });
     }
     
 });


 myapp.controller("ShowAvailableBuses", function($scope,myService,$location) {

      $scope.listOfBuses = listofBusResponse;

      $scope.book = function(rowdata) {
          var data1 = {
                firstName:"Rakesh",
                lastName:"Bhatija",
                gender:"Male",
                age:28,
                mobileNumber:"9833417250",
                email:"xyz@gmail.com",
                busId:rowdata.busId,
                fromLocation:rowdata.fromLocation,
                toDestination:rowdata.toDestination, 
                price:rowdata.price
          }
         
          myService.fetchBusList(data1,"http://reservationsystem.cfapps.io/rest/book").success(function(data){
              
              bookingDone = data;
              $location.path("/bookBus");
          });
      }
 });

myapp.controller("BookingDone", function($scope,myService) {
    $scope.bookingStatus = "Hi "+ bookingDone.firstName +" your booking is done and booking ID is " +bookingDone.reservationId;
    $scope.cancelBooking = function() {
        //alert(bookingDone.reservationId);
        var data1 = {reservationId: bookingDone.reservationId}; 
        myService.fetchBusList(data1,"http://reservationsystem.cfapps.io/rest/cancle").success(function(data){
              
             cancelStatus = data;
          });
    };
});