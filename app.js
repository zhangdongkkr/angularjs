var myFristAppModule = angular.module("MyFirstApp", []);

myFristAppModule.controller("MyFirstController", function($scope){
    $scope.car = "Honda Accord";
    $scope.myObjects = ["Object1", "Object2", "Object3"];
    $scope.buttonPressed = function(){
        $scope.myObjects.push($scope.winner);
        $scope.winner = "";
    }

});


