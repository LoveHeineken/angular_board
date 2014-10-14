'use strict'

###*
 # @ngdoc function
 # @name angularBoardApp.controller:MainCtrl
 # @description
 # # MainCtrl
 # Controller of the angularBoardApp
###
angular.module('angularBoardApp')
  .controller 'MainCtrl', ($scope) ->
    $scope.awesomeThings = [
      'HTML5 Boilerplate'
      'AngularJS'
      'Karma'
    ]
