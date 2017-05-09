'use strict';
(function(){

// Parent Component for the store
class StoreController {
  constructor($mdSidenav, $window, $animate) {
    this.message = 'Hello';
    this.open = false;
    this.images = ['blacksuit.jpeg', 'bwsuit.jpeg', 'blackshoes.jpeg','graysuit.jpeg','redsuit.jpeg'];

    // Function animates sidenav and itemlist so that they shrink and grow smoothly
    this.toggle = () => {
        const el = angular.element('item-list');
        const el2 = angular.element('md-sidenav');

        if(!this.open) {
            $animate.addClass(el, 'md-opened-custom');
            $animate.addClass(el2, 'md-opened-custom');
        } else{
            $animate.removeClass(el, 'md-opened-custom');
            $animate.removeClass(el2, 'md-opened-custom');
        }
        this.open = !this.open;
    };
  }
}

angular.module('paquetApp')
  .component('store', {
    templateUrl: 'app/store/views/store.html',
    controller: StoreController,
    controllerAs: 'store'
  });

})();
