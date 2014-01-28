'use strict';


// Declare app level module which depends on filters, and services
angular.module('directiveTutorial', [
  'ngRoute',
  'directiveTutorial.directives'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/helloWorld1', {templateUrl: 'partials/helloWorld1.html'});
  $routeProvider.when('/helloWorld2', {templateUrl: 'partials/helloWorld2.html'});
  $routeProvider.when('/helloWorld3', {templateUrl: 'partials/helloWorld3.html'});
  $routeProvider.when('/helloWorld4', {templateUrl: 'partials/helloWorld4.html'});
  $routeProvider.when('/clock1', {templateUrl: 'partials/clock1.html'});
  $routeProvider.when('/clock2', {templateUrl: 'partials/clock2.html'});
  $routeProvider.otherwise({redirectTo: '/helloWorld1'});
}]);
