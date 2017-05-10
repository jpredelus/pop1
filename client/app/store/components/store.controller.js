'use strict';
(function(){

// Parent Component for the store
class StoreController {
  constructor($animate, $scope, $log) {
    this.open = false;
    this.images = ['blacksuit.jpeg', 'bwsuit.jpeg', 'blackshoes.jpeg','graysuit.jpeg','redsuit.jpeg'];
    this.animate = $animate;
    this.scope = $scope;
    this.log = $log.log;
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
