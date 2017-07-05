
class CartCardController {
  constructor(appCart) {
    this.remove = appCart.removeFromCart;
  }
}


angular.module('paquetApp.store')
.component('cartCard', {
  templateUrl: 'components/shop-navbar/cartCard.html',
  controller: CartCardController,
  controllerAs: 'ctrl',
  bindings: {
    cart: '='
  }
});