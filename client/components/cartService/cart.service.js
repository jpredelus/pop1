'use strict';

class CartService {
  constructor($rootScope) {
    const cart = {};
    cart.items = {};
    cart.totalQty = 0;
    cart.subTotal = 0;

    this.setCart = (myCart) => {$rootScope.cart = myCart;};
    this.add = ()=>{$rootScope.cart.totalQty++;};

    this.setCart(cart);
  }
}

angular.module('paquetApp.cart', [])
.service('appCart', CartService);