'use strict';

angular.module('paquetApp')
    /*
    This directive toggles a class
     */
  .directive('scrollPast', function($window) {
    return {
      restrict: 'A',
      link: function(scope, el, attrs) {
        const scroll = attrs.scrollPast ? attrs.scrollPast : el[0].offsetTop;
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