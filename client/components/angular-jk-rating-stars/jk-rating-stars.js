'use strict';

// jk-rating-stars Module from https://github.com/juank11memphis/angular-jk-rating-stars with half star features
// Uses md-svg-icon directive instead of font icons

(function () {
  'use strict';

  angular.module('jkAngularRatingStars', ['jkAngularRatingStars.templates']);
})();

(function () {
  'use strict';

  function RatingStarsController($attrs, $timeout) {

    var that = this;

    if (that.readOnly === undefined) {
      that.readOnly = false;
    }

    that.initStarsArray = function () {
      that.starsArray = that.getStarsArray();
      that.validateStars(that.rating);
    };

    that.getStarsArray = function () {
      var starsArray = [];
      for (var index = 0; index < that.maxRating; index++) {
        var starItem = {
          index: index,
          class: 'star-off',
          name: 'star-outline'
        };
        starsArray.push(starItem);
      }
      return starsArray;
    };

    that.setRating = function (rating) {
      if (that.readOnly) {
        return;
      }
      that.rating = rating;
      that.validateStars(that.rating);
      $timeout(function () {
        that.onRating({
          rating: that.rating
        });
      });
    };

    that.setMouseOverRating = function (rating) {
      if (that.readOnly) {
        return;
      }
      that.validateStars(rating);
    };

    that.validateStars = function (rating) {
      if (!that.starsArray || that.starsArray.length === 0) {
        return;
      }
      for (var index = 0; index < that.starsArray.length; index++) {
        var starItem = that.starsArray[index];
        // Added Half star feature;
        if (index <= Math.round(rating - 1)) {
          starItem.name = 'star';
          if (index > rating - 1) {
            starItem.name = 'star-half';
          }
        } else {
          starItem.name = 'star-outline';
        }
      }
    };
  }

  angular.module('jkAngularRatingStars').controller('RatingStarsController', ['$attrs', '$timeout', RatingStarsController]);
})();

(function () {

  'use strict';

  function RatingStarsDirective() {

    function link(scope, element, attrs, ctrl) {
      if (!attrs.maxRating || parseInt(attrs.maxRating) <= 0) {
        attrs.maxRating = '5';
      }
      scope.$watch('ctrl.maxRating', function (oldVal, newVal) {
        ctrl.initStarsArray();
      });
      scope.$watch('ctrl.rating', function (oldVal, newVal) {
        ctrl.validateStars(ctrl.rating);
      });
    }

    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'rating-stars-directive.html',
      scope: {},
      controller: 'RatingStarsController',
      controllerAs: 'ctrl',
      bindToController: {
        maxRating: '@?',
        rating: '=?',
        readOnly: '=?',
        onRating: '&'
      },
      link: link
    };
  }

  angular.module('jkAngularRatingStars').directive('jkRatingStars', [RatingStarsDirective]);
})();

(function () {
  angular.module("jkAngularRatingStars.templates", []).run(["$templateCache", function ($templateCache) {
    $templateCache.put("rating-stars-directive.html", "<div\n  class=\"jk-rating-stars-container\"\n  layout=\"row\" >\n\n  <a\n    class=\"button\"\n    ng-click=\"ctrl.setRating(0)\"\n    ng-if=\"!ctrl.readOnly\" >\n    <i class=\"material-icons\">remove_circle_outline</i>\n  </a>\n\n  <a\n    class=\"button star-button\"\n    ng-class=\"item.class\"\n    ng-mouseover=\"ctrl.setMouseOverRating($index + 1)\"\n    ng-mouseleave=\"ctrl.setMouseOverRating(ctrl.rating)\"\n    ng-click=\"ctrl.setRating($index + 1)\"\n    ng-repeat=\"item in ctrl.starsArray\" >\n    <md-icon md-svg-icon=\"{{item.name}}\"\n></md-icon>\n  </a>\n\n</div>\n");
  }]);
})();
//# sourceMappingURL=jk-rating-stars.js.map
