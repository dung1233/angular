var app = angular.module("myApp", []);

app.controller("MainController", function ($scope) {
  $scope.users = [
    {
      name: "Product One",
      Price: "22.50",
    },
    {
      name: "Product Two",
      Price: "15.00",
    },
    {
      name: "Product Four",
      Price: "123.82",
    },
    {
      name: "Product Five",
      Price: "123.75",
    },
  ];

  $scope.modalTitle = "Edit Product";
  $scope.formData = {};

  $scope.openModal = function (mode, user) {
    if (mode === "add") {
      $scope.modalTitle = "Edit Product";
      $scope.formData = {};
    } else if (mode === "edit") {
      $scope.modalTitle = "Chỉnh sửa người dùng";
      $scope.formData = angular.copy(user);
    }

    $("#myModal").modal("show");
  };

  $scope.submitUser = function () {
    if ($scope.formData.id) {
      var index = $scope.users.findIndex((u) => u.id === $scope.formData.id);
      if (index !== -1) {
        $scope.users[index] = angular.copy($scope.formData);
      }
    } else {
      $scope.formData.id = $scope.users.length + 1;
      $scope.users.push(angular.copy($scope.formData));
    }

    $("#myModal").modal("hide");
    $scope.formData = {};
  };

  $scope.deleteUser = function (user) {
    var index = $scope.users.indexOf(user);
    if (index !== -1) {
      $scope.users.splice(index, 1);
    }
  };
});
