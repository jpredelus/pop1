'use strict';

class OrderController {
  constructor() {
    
  }
}

angular.module('paquetApp')
.component('order', {
  templateUrl: 'app/account/profile/partials/order.html',
  controller: OrderController,
  controllerAs: 'order',
  bindings: {
    order: '<'
  }
});