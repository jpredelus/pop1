'use strict';

class itemFilterController {
    constructor() {
    }

}

angular.module('paquetApp.store')
    .component('itemFilter', {
        templateUrl: 'app/store/views/itemFilter.html',
        controller: itemFilterController,
        controllerAs: 'filter',
        bindings: {
            filter: '='
        }
    });
