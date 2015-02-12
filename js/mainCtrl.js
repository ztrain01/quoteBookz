var app = angular.module('quoteBook');

app.controller('MainController', function($scope, mainService){
  
  $scope.test = 'Yahoo!';

app.service('mainService', function() { 

  
var getData = function() {
  $scope.quotes = mainService.getData()
}  
  getData();

})
});