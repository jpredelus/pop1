'use strict';

class CartService {
  constructor($rootScope, $http) {
    const cart = {};
    cart.items = {};
    cart.totalQty = 0;
    cart.subTotal = 0;

    //updates cart
    this.setCart = (myCart) => {$rootScope.cart = myCart;};
    
    this.removeFromCart = (id)=> {
      $http.get(`/cart/remove-product/${id}`).then(
        (res)=>{
          console.log(res.data);
          this.setCart(res.data);
        },
        (err)=>{
          console.log(err);
        }
      );
    };

    //gets cart
    this.getCart = ()=> {
      $http.get('/cart') .then(
        (res)=> {
          this.setCart(res.data);
        },
        (err)=> {
          console.log(err);
          this.setCart({});
        }
      );
    };

    // Adds product to cart with id
    this.add = (id)=>{
      $http.get(`/cart/add-product/${id}`).then(
        (res)=> {
          this.setCart(res.data);
        },
        (err)=> {
          console.log(err);
        });
    };

    // empties cart of all products
    this.empty = () => {
      $http.get('/cart/empty').then(()=> {
        this.setCart({});
      });
    };
    this.setCart(cart);
  }
}

angular.module('paquetApp.cart', [])
.service('appCart', CartService)
.run((appCart)=> {
  appCart.getCart();
});