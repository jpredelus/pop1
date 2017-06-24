'use strict';

class ProductManagementController {
  constructor(MockStore, metrics) {

    // Get Order Data
    this.products = MockStore.createProducts(25,25);
    this.orders = MockStore.createOrders(15,1,this.products);
    this.orders = metrics.getActiveOrders(this.orders);
    
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
  }
}

angular.module('paquetApp')
.component('productManagement', {
  templateUrl: 'app/account/dashboard/partials/productManagement.html',
  controller: ProductManagementController,
  controllerAs: 'ctrl'
});