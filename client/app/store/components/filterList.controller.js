'use strict';

class filterListController {
    constructor(lodash, $filter) {
        const _ = lodash;
        // unique list of properties from items
        const keys = _.reduce(this.items, (r,v,k) => { return _.union(lodash.keys(v));});
        
        // function that takes a string key and a collection of objects then
        // returns an array of unique values
        const getUniqueValues = (key, collection) => _.chain(collection).map(key).uniq().value();
        
        // collection of filter property names and the unique values
        const filters = [];
        for(let key of keys) {
            filters.push({
                name: key,
                values: getUniqueValues(key, this.items)
            });
        }
        console.log(filters);
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
