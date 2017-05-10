'use strict';

angular.module('paquetApp')
    /*
    This directive toggles a class based on a given scroll position
     */
  .directive('scrollPast', function($window) {
    return {
      restrict: 'A',
      link: function(scope, el, attrs) {
        const scroll = attrs.scrollPast;
        angular.element($window).bind('scroll', (top)=> {
          const prev = scope.scroll;
          const elWindow = top.currentTarget;
          scope.scroll = elWindow.pageYOffset >= scroll ? true : false;
          if(scope.scroll !== prev) {
            scope.$apply();
          }
        });
        

      }
    };
  });