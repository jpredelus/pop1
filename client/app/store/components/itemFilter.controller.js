'use strict';

class itemFilterController {
    constructor($scope,lodash) {
        const _ = lodash;
        this.static = angular.copy(this.filter);

        // updates filterby value list
        this.updateFilter = ()=> {
            this.filter.values = [];
            _.forIn(this.filterValues, (v,k) => {
                if(v) {
                    this.filter.values.push(k);
                }
            });
        };

        // object that stores whether a filter value is checked or unchecked
        this.filterValues = {};
        this.updateRange = (filter) => {
            this.filter.range = filter.range;
            $scope.$emit('FilterChange');

        };
        // function takes a bool and a filters value 
        // and updates whether it is checked or unchecked
        this.updateFilterValue = (value, bool)=> {
            this.filterValues[value] = bool;
            this.updateFilter();
            $scope.$emit('FilterChange');



        };
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
