//this is external js file(for module and contrller) of login Page 
var x=angular.module("m1",[]);
x.controller("c1",function($scope)
{
$scope.n1="";
$scope.n2="";
$scope.fun1=function()
{
if($scope.n1=="amresh" && $scope.n2=="amresh#123")
alert("Valid User Id");
else
alert("Invalid User Id");
};
});