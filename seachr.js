let app = angular.module("app1", []);
app.filter("myfilter", function () {
  return function (x) {
    let i,
      c,
      text = "";
    for (i = 0; i < x.length; i++) {
      c = x[i];
      c = c.toUpperCase();
      text += c;
    }
    return text;
  };
});

app.controller("controller1", function ($scope) {
  $scope.programminglanguagenames = [
    "cobol",
    "pascal",
    "java",
    "ruby",
    "c",
    "css",
  ];
});
