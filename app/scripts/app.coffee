'use strict'

###*
 # @ngdoc overview
 # @name angularBoardApp
 # @description
 # # angularBoardApp
 #
 # Main module of the application.
###
angular
  .module('angularBoardApp', [
    'ngAnimate',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config ($routeProvider) ->
    $routeProvider
      .when '/',
        templateUrl: 'views/main.html'
        controller: 'MainCtrl'
      .when '/about',
        templateUrl: 'views/about.html'
        controller: 'AboutCtrl'
      .otherwise
        redirectTo: '/'

