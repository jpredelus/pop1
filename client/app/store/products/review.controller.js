'use strict';

class ReviewCardController {
  constructor() {

  }
}

angular.module('paquetApp.store')
  .component('reviewCard', {
    templateUrl: 'app/store/products/review.html',
    controller: ReviewCardController,
    controllerAs: 'review',
    bindings: {
      'data': '<'
    }
});