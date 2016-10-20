/**
 * Created by rajan on 10/15/2016.
 */
var appname = angular.module("todo", []);
appname.controller('todoCtrl', function($scope) {

    $scope.contacts = []; //An Array to store all data
    $scope.failed=  '';
    $scope.local = [];

    $scope.addContact=function()
    {
        if(!$scope.addContactForm.$error.required)
        {
        $scope.failed='';

            var newContact ={
                id: localStorage.length,
                Title: $scope.Title,
                Fullname: $scope.Name,
                Dollar : $scope.Amount,
                Description: $scope.Newdescription
            }
            $scope.contacts.push(newContact);

            localStorage.setItem( 'item', JSON.stringify(newContact) );

            var x = localStorage.getItem('item');
            var y = JSON.parse(x);
            $scope.local.push(y)
        }
        else{
            $scope.failed ="ALL Field must be filled";
        }


    }
} )