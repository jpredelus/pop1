'use strict';

class ProductManagementController {
  constructor(MockStore, metrics, $mdDialog,$scope, $q, $animate,$timeout) {
    // Get Order Data
    const elem = angular.element(document.querySelector('#kpirow'))[0];
    const animPromise = $animate.addClass(elem, 'fadeInDown');
    this.hideall = true;
    this.products = MockStore.createProducts(25,25);
    this.orders = MockStore.createOrders(15,1,this.products);
    this.orders = metrics.getActiveOrders(this.orders);
    this.createRows = (items) => {
            const rows = [[],[],[],[]];
            let i = 0;
            for (let item of items) {
                rows[i%4].push(item);
                i++;
            }
            return rows;
        };
    this.promises = [];
    let deferreds = [];
    for(let x of this.products) {
      let defer = $q.defer();
      x.resolve = defer.resolve;
      deferreds.push(defer.promise);
    }
    deferreds.push(animPromise);
    

    $q.all(deferreds).then((x)=> {
      $timeout(()=> {this.hideall = false;},900);
    });
    // Calculate Metrics
    this.getMetrics =(orders, products) => {
      this.revenue = metrics.getRevenue(orders);
      this.productNum = products.length;
      this.rented = parseFloat(metrics.getProducts(orders).length);
      this.percentRented = this.rented/parseFloat(products.length);
      this.notRented = this.productNum - this.rented;
      this.revPerProduct = this.revenue/parseFloat(products.length);
    };

    this.getMetrics(this.orders, this.products);
    this.chartData = [this.rented, this.notRented];
    this.rows = this.createRows(this.products);

    this.openProduct = (ev, product) => {
      $mdDialog.show({
        locals: {product: product},
        bindToController: true,
        controller: 'ProductDetailsController',
        controllerAs: 'ctrl',
        templateUrl: 'app/account/dashboard/partials/productDetails.html',
        parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose:true,
        fullscreen: false,
      });
    };
  }
}

angular.module('paquetApp')
.component('productManagement', {
  templateUrl: 'app/account/dashboard/partials/productManagement.html',
  controller: ProductManagementController,
  controllerAs: 'ctrl'
});