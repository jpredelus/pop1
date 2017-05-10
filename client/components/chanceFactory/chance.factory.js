// Taken from https://github.com/therealnicksaunders/angular-chance-adapter/blob/master/angular-chance-adapter.js

(function () {
  'use strict';
  angular.module('chance', []).factory('chance', ['$window', function ($window) { return new $window.Chance(); }]);
})();