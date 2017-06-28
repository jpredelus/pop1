'use strict';

class ProductDetailsController {
  constructor() {

  }
}

class ProductCardController {
    constructor() {

    }
}

angular.module('paquetApp')
.controller('ProductDetailsController', ProductDetailsController);



angular.module('paquetApp.store')
.component('productCard', {
    templateUrl: 'app/account/dashboard/partials/productCard.html',
    controller: ProductCardController,
    controllerAs: 'ctrl',
    bindings: {
        product: '<'
    }
});