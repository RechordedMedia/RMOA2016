app.controller('EventsCtrl', function ($scope, $stateParams, $ionicLoading, $http) {
    

    //For WHEN I GOT A NICE CORS Running
    $ionicLoading.show();
    $scope.events = [];

    $http
    .get($scope.baseUrl + "10", { cache: false, dataType: "jsonp" })
    .then(function (response) {
        $scope.events = response.data.results;
        $ionicLoading.hide();
    });

    $scope.doRefresh = function () {

        console.log("Doing a Refresh");
        $http
         .get($scope.baseUrl + "10", { cache: false, dataType: "jsonp" })
         .success(function (response) {
             $scope.events = response.results;
             console.log("Data Received" + response.results);
         })
         .finally(function () {
             // Stop the ion-refresher from spinning
             $scope.$broadcast('scroll.refreshComplete');
         });
    };
});