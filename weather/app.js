// app.js
var app = angular.module("weatherApp", []);

app.controller("WeatherController", function ($scope, $http, $filter) {
  var apiKey = "90852895f40635fdd78f7b09e5be2b48";
  var apiUrl =
    "https://api.openweathermap.org/data/2.5/weather?q=Hanoi&appid=" + apiKey;

  $http
    .get(apiUrl)
    .then(function (response) {
      var data = response.data;
      $scope.cityName = data.name;
      $scope.weatherDescription = data.weather[0].description;
      $scope.temperature = (data.main.temp - 273.15).toFixed(2); // Chuyển đổi từ Kelvin sang Celsius

      var timestamp = data.dt * 1000; // Đổi từ giây sang mili giây
      var date = new Date(timestamp);
      $scope.formattedDateTime = $filter("date")(date, "dd/MM/yyyy HH:mm:ss");

      // Xác định biểu tượng thời tiết tương ứng
      var weatherCode = data.weather[0].id;
      $scope.weatherIcon = getWeatherIcon(weatherCode);
    })
    .catch(function (error) {
      console.log("Không thể lấy thông tin thời tiết. Lỗi: ", error);
    });

  // Hàm xác định biểu tượng thời tiết
  function getWeatherIcon(weatherCode) {
    if (weatherCode >= 200 && weatherCode < 300) {
      return "images/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvc3YxODI3MjgtaW1hZ2Utam9iNjE1XzEucG5n.jfif";
    } else if (weatherCode >= 300 && weatherCode < 600) {
      return "images/mua.jpg";
    } else if (weatherCode >= 600 && weatherCode < 700) {
      return "images/snowy.png";
    } else if (weatherCode >= 700 && weatherCode < 800) {
      return "images/mist.png";
    } else if (weatherCode === 800) {
      return "images/sunny.png";
    } else if (weatherCode > 800) {
      return "images/cloudy.png";
    } else {
      return "images/unknown.png";
    }
  }
});
