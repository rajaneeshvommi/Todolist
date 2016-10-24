/**
 * Created by rajan on 10/23/2016.
 */

var app = angular.module("myApp", []); // creating a APP

function Function1($scope, $rootScope)
{
    $rootScope.Counter = (($rootScope.Counter || 0) + 1);
    $scope.Counter = $rootScope.Counter;
    $scope.ControllerName = "Function1";
}
function Function2($scope, $rootScope)
{
    $rootScope.Counter = (($rootScope.Counter || 0) + 1);
    $scope.ControllerName = "Function2";
}
app.controller("Function1", Function1); // Registering the VM
app.controller("Function2", Function2);
