'use strict';
(function(){

class ShopComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('paquetApp')
  .component('shop', {
    templateUrl: 'app/shop/shop.html',
    controller: ShopComponent
  });

})();
