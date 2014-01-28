'use strict';

var directives = angular.module('directiveTutorial.directives', []);

directives.directive('helloWorld', function() {
    return {
        restrict: 'E',
        template: '<div>Hello World!</div>',
        replace: true
    };

});

directives.directive('helloWorld2', function() {
    return {
        restrict: 'E',
        template: '<div>Hello {{name}}!</div>',
        replace: true,
        scope: {name: '@'}
    };
});

directives.directive('helloWorld3', function() {
    return {
        restrict: 'EA',
        templateUrl: 'templates/hello-world-template.html',
        replace: true,
        scope: {name: '@'}
    };
});

directives.directive('digitalClock', function($timeout, dateFilter) {

    return {
        restrict: 'EA',
        template: '{{time}}',
        replace: false,
        scope: true,
        link: function(scope, element, attrs) {

            var getFormattedDate = function() {
                return dateFilter(new Date(), scope.format);
            };

            var delayedUpdate = function() {
                $timeout(function() {
                    scope.time = getFormattedDate();
                    delayedUpdate(scope);
                }, 1000);
            };
            
            scope.format = attrs.format || 'HH:mm:ss';
            scope.time = getFormattedDate();
            
            delayedUpdate();
        }
    };
});

directives.directive('clock', function($timeout, dateFilter) {

   return {
        restrict: 'EA',
        templateUrl: 'templates/clock.html',
        replace: false,
        scope: true,
        link: function(scope, element, attrs) {
            
            var getFormattedDate = function() {
                return dateFilter(new Date(), scope.format);
            };

            var delayedUpdate = function() {
                $timeout(function() {
                    scope.time = getFormattedDate();
                    delayedUpdate(scope);
                }, 1000);
            };

            scope.analog = typeof (attrs.analog) !== 'undefined';

            if (scope.analog) {
                CoolClock.findAndCreateClocks();
            } else {
                scope.format = attrs.format || 'HH:mm:ss';
                scope.time = getFormattedDate();
            
                delayedUpdate();
            }

        }
    };
});
