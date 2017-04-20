'use strict';

angular.module('paquetApp')
    /*
    This directive allows you to set any css property through the attributes of an element
    prefix the property name that needs to be set with an zz. The attribute css must also be present.

    Example:
    Setting the height of a div to 90px
    <div css='', *height="90px"></div>
     */
  .directive('css', function() {
    return {
      restrict: 'A',
      link: function(scope, element, attrs) {
        for(const key of Object.keys(attrs)) {
            if (key.substring(0,2) === 'zz') {
                element.css(key.replace('zz',''), attrs[key]);
            }
        }
      }
    };
  });