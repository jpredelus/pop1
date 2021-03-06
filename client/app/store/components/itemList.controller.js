'use strict';

class ItemListController {
    constructor(lodash, $scope) {
        const _ = lodash;
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

        const updateRows =_.debounce((changes)=>{
                $scope.$apply(()=>{
                    self.rows = self.createRows(changes.items.currentValue);
                    $scope.$emit('FilterDone');
                });
            },1000);

        self.rows = self.createRows(self.items);
        self.$onChanges = (changes) => {
            updateRows(changes);
            
        };
    }
}

angular.module('paquetApp.store')
    .component('itemList', {
        templateUrl: 'app/store/views/itemList.html',
        controller: ItemListController,
        controllerAs: 'list',
        bindings: {
            items: '<',
            loading:'<'
        }
    });
