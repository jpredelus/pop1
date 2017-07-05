'use strict';

class CheckoutController {
  constructor(appCart) {
    this.remove = appCart.removeFromCart;
  }
}

angular.module('paquetApp.store')
.controller('CheckoutController', CheckoutController);