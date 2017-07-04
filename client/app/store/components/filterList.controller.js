'use strict';

class filterListController {
    constructor(lodash, $filter,$scope, productFilter) {
        
        this.items.$promise.then((x)=>{
            this.static = angular.copy(this.items);
            
            this.filters = productFilter.createFilters(this.static,['color','sizes']);
            const priceFilter = productFilter.createFilters(this.static,['price'],[0,300])[0];
            this.filters.push(priceFilter);



            // Event occurs when ever a filter is changed.
            $scope.$on('FilterChange', () => {
                this.items = productFilter.filter(this.filters, this.static);
            });
        });

    }

}

angular.module('paquetApp.store')
    .component('filterList', {
        templateUrl: 'app/store/views/filterList.html',
        controller: filterListController,
        controllerAs: 'filter',
        bindings: {
            items: '='
        }
    });
