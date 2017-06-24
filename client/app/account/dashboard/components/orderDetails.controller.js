'use strict';

class OrderDetailsController {
  constructor($mdDialog) {
    this.cancel = $mdDialog.cancel;
    this.product = this.order.products[0];
    this.statuses = ['Shipped', 'Pending Approval', 'Approved'];
  }
}

angular.module('paquetApp')
.controller('OrderDetailsController', OrderDetailsController);