'use strict';
// Component serves as navbar for store
class StoreNavbarController {
    constructor() {
        const self = this;
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