'use strict';

(function() {

  function ProductResource($resource) {
    return $resource('/api/products/:id', 
    {
      id: '@_id'
    });
  }

  angular.module('paquetApp.Product',[])
    .factory('Product', ProductResource);
})();
