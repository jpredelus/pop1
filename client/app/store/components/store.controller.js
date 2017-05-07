'use strict';
(function(){

// Parent Component for the store
class StoreController {
  constructor() {
    this.message = 'Hello';
    this.images = ['blacksuit.jpeg', 'bwsuit.jpeg', 'blackshoes.jpeg','graysuit.jpeg','redsuit.jpeg'];
  }
}

angular.module('paquetApp')
  .component('store', {
    templateUrl: 'app/store/views/store.html',
    controller: StoreController,
    controllerAs: 'store'
  });

})();
