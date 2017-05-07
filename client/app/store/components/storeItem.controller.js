'use strict';

class StoreItemController {
    constructor() {

    }
}

angular.module('paquetApp')
.component('storeItem', {
    templateUrl: 'app/store/views/storeItem.html',
    controller: StoreItemController,
    controllerAs: 'item',
    bindings: {
        item: '<'
    }
});