'use strict';

class OrderController {
  constructor($animate, $timeout) {
    // Stops animation from firing on page load
    this.$onInit = () => {
      $animate.enabled(false);
    };

    // Enables animations once component is finished loading
    $timeout(()=> {
      $animate.enabled(true);
    });
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