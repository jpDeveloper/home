'use strict';

var app = angular
  .module('newJpApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'ui.bootstrap',
    'ngDialog',
    'angularSmoothscroll'
  ]);
  
app.config(function ($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/main.html',
      controller: 'MainCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });

    // use the HTML5 History API
    $locationProvider.html5Mode(true);

});


