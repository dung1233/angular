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

      var weatherCode = data.weather[0].id;
      $scope.weatherIcon = getWeatherIcon(weatherCode);

      $scope.windSpeed = data.wind.speed;
      $scope.windDirection = getWindDirection(data.wind.deg);
    })
    .catch(function (error) {
      console.log("Không thể lấy thông tin thời tiết. Lỗi: ", error);
    });

  // Hàm xác định biểu tượng thời tiết
  function getWeatherIcon(weatherCode) {
    // ... (giữ nguyên hàm getWeatherIcon của bạn)
  }

  // Hàm xác định hướng gió
  function getWindDirection(degree) {
    if (degree >= 337.5 || degree < 22.5) return "North";
    if (degree >= 22.5 && degree < 67.5) return "Northeast";
    if (degree >= 67.5 && degree < 112.5) return "East";
    if (degree >= 112.5 && degree < 157.5) return "Southeast";
    if (degree >= 157.5 && degree < 202.5) return "South";
    if (degree >= 202.5 && degree < 247.5) return "Southwest";
    if (degree >= 247.5 && degree < 292.5) return "West";
    if (degree >= 292.5 && degree < 337.5) return "Northwest";
    return "Unknown";
  }
  function getWeatherIcon(weatherCode) {
    if (weatherCode >= 200 && weatherCode < 300) {
      return "images/thunderstorm.png";
    } else if (weatherCode >= 300 && weatherCode < 600) {
      return "images/rainy.png";
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
