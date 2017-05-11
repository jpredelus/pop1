'use strict';

class filterListController {
    constructor(lodash, $filter,$scope) {
        this.static = angular.copy(this.items);
        const _ = lodash;
        // unique list of properties from items
        const keys = _.reduce(this.static, (r,v,k) => { return _.union(lodash.keys(v));});
        
        // function that takes a string key and a collection of objects then
        // returns an array of unique values
        const getUniqueValues = (key, collection) => _.chain(collection).map(key).uniq().value();
        
        // collection of filter property names and the unique values
        const filters = [];
        for(let key of keys) {
            filters.push({
                name: key,
                values: getUniqueValues(key, this.static)
            });
        }
        this.filters = filters;

        // function to filter items
        const filterItems = (filters, items)=> {
            // for each filter f
            _.forEach(this.filters, (f)=> {
                // for each item i in the items collection
                items = _.filter(items, (i) => {
                    // if the filter isn't empty return true if the objects value
                    // is in the array of filter values
                    if (f.values.length > 0) {
                    return f.values.includes(i[f.name]);
                    }
                    else {
                        return true;
                    }
                });
            });
            return items;
        };


        // Event occurs when ever a filter is changed.
        $scope.$on('FilterChange', () => {
            this.items = filterItems(this.filters, this.static);
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
