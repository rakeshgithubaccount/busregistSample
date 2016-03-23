/*var myapp = angular.module('myApp'); */

var abc ="";
var busList = "";
myapp.service('myService', function($http) {
     
     this.fetchBusList = function(data,url) {
         //alert(data+"----"+url)
         var data1 = data;
            var promise = $http({
                method : 'POST',
                data:data1,
                url : url
            })
            
            return promise; 
        };

    });




