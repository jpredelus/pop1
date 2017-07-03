'use strict';

class StoreItemController {
    constructor(appCart) {
      this.add = appCart.add;

    }
}

angular.module('paquetApp.store')
.component('storeItem', {
    templateUrl: 'app/store/views/storeItem.html',
    controller: StoreItemController,
    controllerAs: 'item',
    bindings: {
        item: '<'
    }
});