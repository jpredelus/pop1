'use strict';
// Component serves as navbar for store
class StoreNavbarController {
    constructor(appCart) {
        const self = this;
        this.remove = appCart.removeFromCart;

        this.openMenu = function($mdMenu, ev) {$mdMenu.open(ev);};
        this.closeMenu = function($mdMenu, ev) {$mdMenu.close(ev);}; 
        
        self.menu = [
        {state: 'Suits', title: 'Suits'},
        {state: 'Shirts', title: 'Shirts'},
        {state: 'Shoes', title: 'Shoes'},
        ];
    }
}

angular.module('paquetApp.store')
.component('shopNavbar', {
    templateUrl: 'components/shop-navbar/shop-navbar.html',
    controller: StoreNavbarController,
    controllerAs: 'nav'
});