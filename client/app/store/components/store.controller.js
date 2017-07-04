'use strict';
(function(){

// Parent Component for the store
class StoreController {
  constructor($animate, chance, lodash, $scope, MockStore,Product) {
    this.open = false;
    this.animate = $animate;

    this.items = Product.query();
    // listens for filter changes and shows loading screens
    $scope.$on('FilterChange', ()=>{
            this.loading = true;
        });

    // debounced function to stop loading
    const stopLoading = lodash.debounce(()=> {
        $scope.$apply(()=>{
            this.loading = false;
        });
    }, 250);

    $scope.$on('FilterDone', ()=>{
            stopLoading();
        });

  }


// Method animates sidenav and itemlist so that the open and close transition is smooth
  toggle()  {
        const el = angular.element('item-list');
        const el2 = angular.element('md-sidenav');

        if(!this.open) {
            this.animate.addClass(el, 'md-opened-custom');
            this.animate.addClass(el2, 'md-opened-custom');
        } else{
            this.animate.removeClass(el, 'md-opened-custom');
            this.animate.removeClass(el2, 'md-opened-custom');
        }
        this.open = !this.open;
    }
}

angular.module('paquetApp.store')
  .component('store', {
    templateUrl: 'app/store/views/store.html',
    controller: StoreController,
    controllerAs: 'store'
  });

})();
