'use strict';

angular.module('angularClassApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

angularClassApp.controller('secondController', function($scope){
    $scope.upperCaseMessage="";
    $scope.lowerCaseMessage="";
    $scope.displayText=function(){
        $scope.upperCaseMessage=$scope.simpleText.toUpperCase();
        $scope.lowerCaseMessage=$scope.simpleText.toLowerCase();
    }
});
