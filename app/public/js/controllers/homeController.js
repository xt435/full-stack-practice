angular.module("tinyurlApp")
    .controller("homeController", ["$scope", "$http", "$location", function ($scope, $http, $location) {
        $scope.submit = function () {
            $http.post("/api/tinyUrl_V3/urls", {
                longUrl: $scope.longUrl
            }).success(function (data) {
                $location.path("/urls/" + data.shortUrl);
            });
        }
    }]);
