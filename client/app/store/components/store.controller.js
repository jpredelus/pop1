'use strict';
(function(){

// Parent Component for the store
class StoreController {
  constructor($animate, chance, lodash, $scope) {
    this.open = false;
    this.animate = $animate;

    // use chancejs to create random items
    
    
    // use mixin to define chance.item,
    // will choose from set of values for each property
    chance.mixin({
        item: (set)=> {
            return {
                color: chance.pickone(set.color),
                state: chance.pickone(set.state),
                price: chance.pickone(set.price),
                name: chance.pickone(set.name),
                image: chance.pickone(set.image)
            };

        }
    });

    // create array of sets for each property
    const itemSet = {};
    itemSet.color = [];
    itemSet.state = [];
    itemSet.price = [];
    itemSet.name = [];
    itemSet.image = ['blacksuit.jpeg', 'bwsuit.jpeg', 'blackshoes.jpeg','graysuit.jpeg','redsuit.jpeg',
    'blackman.jpg','blacktux.jpg','bluesuit.jpg','redtie.jpg','whitesuit.jpg'];

    //fill sets with random values
    for(let x of lodash.range(9)) {
        itemSet.color.push(chance.color({format: 'name'}));
        itemSet.state.push(chance.state());
        itemSet.price.push(chance.dollar({max: 300}));
        itemSet.name.push(chance.name());
    }
    // create items from set and push into items collection
    this.items = [];
    for(let i of lodash.range(30)) {
        this.items.push(chance.item(itemSet));
    }

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
