'use strict';

/* jasmine specs for directives go here */

describe('directives', function() {
  beforeEach(module('directiveTutorial.directives'));

  describe('helloWorld', function() {
    it('should print Hello World', function() {
      inject(function($compile, $rootScope) {
        var element = $compile('<hello-world></hello-world>')($rootScope);
        expect(element.text()).toEqual('Hello World!');
      });
    });
  });
  
  describe('helloWorld2', function() {
    it('should print Hello + the parameter "name"', function() {
      inject(function($compile, $rootScope) {
        
        var element = $compile('<hello-world-2 name="Baby"></hello-world-2>')($rootScope);
        $rootScope.$digest();
        
        expect(element.text()).toEqual('Hello Baby!');
      });
    });
  });
  
});
