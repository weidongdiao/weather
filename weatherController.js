var app = angular.module('weatherApp',[]);

app.controller('weatherController', function($scope,$http){

   $scope.weatherSearch = function(){
       $scope.showDetail = 1;
       var openWeatherMapUrl = "http://api.openweathermap.org/data/2.5/weather?zip=" + $scope.zipcode + "&appid=87221180cc840254c9be2cf5f2dedddc";
        console.log(openWeatherMapUrl);
        console.log($scope.zipcode);

         $http.get(openWeatherMapUrl)
            .then(function(data){
               $scope.weather = data.data.weather[0];
               $scope.icon = "http://openweathermap.org/img/w/" + $scope.weather.icon + ".png";
               $scope.main = data.data.main;
               $scope.fTemp = ($scope.main.temp *(9/5) - 459.67).toFixed(1) + "℉";
               $scope.cTemp = ($scope.main.temp - 273).toFixed(1) + "℃";
               $scope.name = data.data.name;
               $scope.country = data.data.sys.country;
            })

  };

});
