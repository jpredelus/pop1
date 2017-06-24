'use strict';

class MetricService {
  constructor(lodash) {
    this._ = lodash;
  }
  // returns the sum of a collections property
  sumObjs(collection, property) {
    let value = 0.0;
    this._.forEach(collection, (o)=> {
      value += parseFloat(o[property]);
    });
    return value;
  }
  avgObjs(collection, property) {
    return this.sumObjs(collection, property)/parseFloat(collection.length);
  }
  getActiveOrders(orders) {
    return this._.filter(orders, (o) => {return o.status !== 'Pending Approval';});
  }
  getProducts(orders, unique= false) {
    const products = [];
    this._.forEach(orders, (o) => products.push(o.products[0]));
    return unique ? this._.uniq(products) : products ;
  }

  getRevenue(orders) {
    const prod = this.getProducts(orders);
    return this.sumObjs(prod, 'price');
  }

  getProductNum(orders) {
    return parseFloat(this.getProducts(orders, true).length);
  }

}
angular.module('paquetApp.metrics', ['ngLodash'])
.service('metrics', MetricService);