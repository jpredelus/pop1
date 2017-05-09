'use strict';

class ItemListController {
    constructor() {
        const self = this;
        // Function to order each item into the 4 column layout
        // For Example the first 8 items would be placed like [[1,5],[2,6],[3,7],[4,8]]
        self.createRows = (items) => {
            const rows = [[],[],[],[]];
            let i = 0;
            for (let item of items) {
                rows[i%4].push(item);
                i++;
            }
            return rows;
        };
        self.$onChanges = (changes) => {
            self.rows = self.createRows(changes.items.currentValue);
        };
    }
}

angular.module('paquetApp.store')
    .component('itemList', {
        templateUrl: 'app/store/views/itemList.html',
        controller: ItemListController,
        controllerAs: 'list',
        bindings: {
            items: '<'
        }
    });
