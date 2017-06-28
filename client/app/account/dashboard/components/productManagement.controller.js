'use strict';

class ProductManagementController {
  constructor(MockStore, metrics, $mdDialog,$scope) {
    // Get Order Data
    this.products = MockStore.createProducts(25,25);
    this.orders = MockStore.createOrders(15,1,this.products);
    this.orders = metrics.getActiveOrders(this.orders);
    this.$onDestroy = ()=> {
      console.log('Products destroyed',this);
    };
    this.createRows = (items) => {
            const rows = [[],[],[],[]];
            let i = 0;
            for (let item of items) {
                rows[i%4].push(item);
                i++;
            }
            return rows;
        };
    
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