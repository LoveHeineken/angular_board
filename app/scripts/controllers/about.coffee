'use strict'

###*
 # @ngdoc function
 # @name angularBoardApp.controller:AboutCtrl
 # @description
 # # AboutCtrl
 # Controller of the angularBoardApp
###
angular.module('angularBoardApp')
  .controller 'AboutCtrl', ($scope) ->
    $scope.awesomeThings = [
      'HTML5 Boilerplate'
      'AngularJS'
      'Karma'
    ]
