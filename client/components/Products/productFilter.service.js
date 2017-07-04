class ProductFilterService {
    constructor(lodash) {
        const _ = lodash;
        const getUniqueValues = (key, collection) => _.chain(collection).flatMap(key).uniq().value();
        
        this.createFilters = (products, properties, range=false) => {
            const filters = [];

            for(let p of properties) {
                filters.push({
                    name: p,
                    values: getUniqueValues(p, products),
                    isArray:  Array.isArray(products[0][p]),
                    range: range
                });
            }
            return filters;
        };

        this.filter = (filters, products)=> {
                // for each filter f
                _.forEach(filters, (f)=> {
                    // for each item i in the items collection
                    
                    products = _.filter(products, (i) => {
                        
                        if(f.range) {
                            return f.range[0] < i[f.name] && f.range[1] > i[f.name];
                        }
                        // if the filter isn't empty return true if the objects value
                        // is in the array of filter values
                        
                        if (f.values.length > 0) {
                            if(f.isArray) {
                                return _.intersection(f.values, i[f.name]).length > 0;
                            }

                            return f.values.includes(i[f.name]);
                        }
                        else {
                            return true;
                        }
                    });
                });
                return products;
            };
    }
}

angular.module('paquetApp.Product')
.service('productFilter', ProductFilterService);