var app = angular.module("myApp", []);

app.controller("MainController", function ($scope) {
  $scope.users = [
    { id: 1, name: "Người dùng 1", email: "user1@example.com" },
    { id: 2, name: "Người dùng 2", email: "user2@example.com" },
    { id: 3, name: "Người dùng 3", email: "user3@example.com" },
  ];

  $scope.modalTitle = "Thêm mới người dùng";
  $scope.formData = {};

  $scope.openModal = function (mode, user) {
    if (mode === "add") {
      $scope.modalTitle = "Thêm mới người dùng";
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
