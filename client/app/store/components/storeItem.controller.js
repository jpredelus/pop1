'use strict';

class StoreItemController {
    constructor() {

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