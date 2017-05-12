'use strict';

class ProductController {
    constructor(lodash) {
        const _ = lodash;
        this.images = ['blacksuit.jpeg', 'bwsuit.jpeg', 'blackshoes.jpeg','graysuit.jpeg','redsuit.jpeg',
    'blackman.jpg','blacktux.jpg','bluesuit.jpg','redtie.jpg','whitesuit.jpg'];
        // seems like there is a bug with the carousel so images are chunked
        this.slides = _.chunk(this.images,1);
    }
}

angular.module('paquetApp.store')
.component('product',{
    templateUrl: 'app/store/products/product.html',
    controller: ProductController,
    controllerAs: 'product'
});