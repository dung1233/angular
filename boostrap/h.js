var app = angular.module("myApp", []);

app.controller("MainController", function ($scope) {
  $scope.users = [
    {
      id: 1,
      name: "Người dùng 1",
      Date: "user1@example.com",
      Sale: "10",
      Category: "AAA",
      like: "8",
      image: "hinhanh/7478.png_860.png",
    },
    {
      id: 2,
      name: "Người dùng 2",
      Date: "user2@example.com",
      Sale: "8",
      like: 0,
      Category: "idle",
      image:
        "hinhanh/999-anh-game-3d-hinh-game-online-dep-nhat-danh-cho-game-thu_2.jpg",
    },
    {
      id: 3,
      name: "Người dùng 3",
      Date: "uSer3@example.com",
      Sale: "7",
      like: 4,
      Category: "3D",
      image:
        "hinhanh/loat-anh-game-tuyet-dep-tha-ho-lua-chon-de-lam-hinh-nen-dien-thoai-cuc-chat-fb3.jpg",
    },
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
