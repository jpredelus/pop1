'use strict';

class OrderManagementController {
  constructor(MockStore, moment, lodash,$scope,metrics,$animate, $timeout, $mdDialog) {
     // Stops animation from firing on page load
    this.$onInit = () => {
      $animate.enabled(false);
    };

    // Enables animations once component is finished loading
    $timeout(()=> {
      $animate.enabled(true);
    });

    // Search field inital values
    $scope.search = {};
    $scope.search2 = '';
    $scope.search.status = 'Pending';
    
    // disables inputs if viewing Pending Orders
    this.disable = (status)=> {
      return status === 'Pending';
    };

    
    lodash = _;

    // Get Order Data
    this.reviews = MockStore.createReviews(25,5);
    this.products = MockStore.createProducts(25,25);
    this.orders = MockStore.createOrders(15,1,this.products);
    this.activeOrders = metrics.getActiveOrders(this.orders);
    
    // Calculate Metrics
    this.getMetrics =(orders, products, reviews) => {
      this.revenue = metrics.getRevenue(orders);
      this.totalSales = parseFloat(orders.length);
      this.ratingsAvg = metrics.avgObjs(reviews, 'score');
      this.rented = parseFloat(metrics.getProducts(orders).length)/products;
      this.salesPerProduct = this.totalSales/parseFloat(products.length);
      this.revPerProduct = this.revenue/parseFloat(products.length);
    };

    // calendar date range
    this.startDate = moment('2050-01-01');
    this.endDate = moment('2080-01-01');

    this.getMetrics(this.activeOrders, this.products, this.reviews);

    // watch for change in orderlist in order to update metrics
    $scope.$watch(()=> {return this.filteredOrders;}, (v)=> {
      if($scope.search.status !== 'Pending'){
        this.getMetrics(metrics.getActiveOrders(v), this.products, this.reviews);
      }
    });

    // Opens order details
    this.openOrder = (ev, order) => {
      $mdDialog.show({
        locals: {order: order},
        bindToController: true,
        controller: 'OrderDetailsController',
        controllerAs: 'ctrl',
        templateUrl: 'app/account/dashboard/partials/orderModal.html',
        parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose:true,
        fullscreen: false,
      });
    };
  }
}

angular.module('paquetApp')
  .component('orderManagement', {
    templateUrl: 'app/account/dashboard/partials/orderManagement.html',
    controller: OrderManagementController,
    controllerAs: 'ctrl'
  });