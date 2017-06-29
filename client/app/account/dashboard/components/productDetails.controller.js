'use strict';

class ProductDetailsController {
  constructor($mdDialog) {
    this.cancel = $mdDialog.cancel;
  }
}

class ProductCardController {
    constructor() {
    }
}

angular.module('paquetApp')
.controller('ProductDetailsController', ProductDetailsController);



angular.module('paquetApp')
.component('productCard', {
    templateUrl: 'app/account/dashboard/partials/productCard.html',
    controller: ProductCardController,
    controllerAs: 'ctrl',
    bindings: {
        product: '<',
        promise: '<',
    }
});

angular.module('paquetApp')
.directive('imgDefer', ()=> {
    return {
        restrict: 'A',
        scope: {imgDefer: '<'},
        link: (scope, el, attr) => {
            
            el.bind('load', ()=>{
                scope.imgDefer();
            });
        }
    };
});