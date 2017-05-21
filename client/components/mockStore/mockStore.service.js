'use strict';
/**
 * Service that creates mock data for anzug
 */
class MockStoreService {
  constructor(chance, lodash) {
    this.chance = chance;
    this._ = lodash;
    this.products = [];
    this.orders = [];
    this.images = ['blacksuit.jpeg', 'bwsuit.jpeg', 'blackshoes.jpeg','graysuit.jpeg','redsuit.jpeg',
    'blackman.jpg','blacktux.jpg','bluesuit.jpg','redtie.jpg','whitesuit.jpg'];
  }
  /** Method that randomly generates products for store
    * @param {[int]} amount - Amount of products to generate
    * @param {[int]} random - number of random items to choose from default is 10
    *
    * @return {[array]} array of product objects
  */ 
  createProducts(amount, random) {
    random = random ? random : 10;
    this.chance.mixin({
        product: (set)=> {
            return {
                color: this.chance.pickone(set.color),
                state: this.chance.pickone(set.state),
                price: this.chance.pickone(set.price),
                name: this.chance.pickone(set.name),
                image: this.chance.pickone(set.image)
            };
        }
    });

     // create array of sets for each property
    const productSet = {};
    productSet.color = [];
    productSet.state = [];
    productSet.price = [];
    productSet.name = [];
    productSet.image = ['blacksuit.jpeg', 'bwsuit.jpeg', 'blackshoes.jpeg','graysuit.jpeg','redsuit.jpeg',
    'blackman.jpg','blacktux.jpg','bluesuit.jpg','redtie.jpg','whitesuit.jpg'];

    //fill sets with random values
    for(let x of this._.range(random)) {
        productSet.color.push(this.chance.color({format: 'name'}));
        productSet.state.push(this.chance.state());
        productSet.price.push(this.chance.dollar({max: 300}));
        productSet.name.push(this.chance.name());
    }
    // create products from set and push into products collection
    for(let i of this._.range(amount)) {
        this.products.push(this.chance.product(productSet));
    }
    return this.products;

  }
  /** Method that randomly generates orders
    * @param {[int]} amount - Amount of orders to generate
    * @param {[int]} max - max number of products in an order
    * @param {[int]} products - array of products to put into order if not provided createProducts is called
    * 
    * @return {[array]} array of order objects
  */ 
  createOrders(amount, max, products) {


    // function creates a given amount of products
     const getProducts = (amount)=> {
        products = [];
        for(let i =0; i < amount; i++) {
          products.push(this.chance.orderProduct(this.images));
        }
        return products;
    };

    // Altered chanceJs product mixin. Picks truly random values instead of picking from a set
    this.chance.mixin({
        orderProduct: (images)=> {
            return {
                color: this.chance.color({format: 'name'}),
                state: this.chance.state(),
                price: this.chance.floating({fixed: 2, min: 0, max: 300}),
                name: this.chance.name(),
                image: this.chance.pickone(images)
            };
        },
      // mixin fuction for orders takes the maximum number of products an order can have and 
      // an array of products to choose from which is optional
      // if not given an array the mixin will generate a product
      order: (productMax, productArray)=> {
        const order = {
            id: this.chance.string({length: 10}),
            date: this.chance.date({string: true}),
            name: this.chance.name(),
            address: this.chance.address(),
            city: this.chance.city(),
            state: this.chance.state(),
            zip: this.chance.zip()
          };

        // generate credit card info
        order.ccType = this.chance.cc_type();
        order.cc = this.chance.cc({type: order.ccType});
        order.last4 = order.cc.slice(-4);


        // if given a product list pick a random number of products between 1 and the max
        // and insert it into the order, otherwise randomly generate products and insert a random
        // amount between 1 and the max into the order
        const amount = this.chance.integer({min: 1, max: productMax});
        order.products = productArray ? this.chance.pickset(productArray, amount) : getProducts(amount);
        
        // Get the total product price
        order.subTotal = 0;
        for(const p of order.products) {
          order.subTotal += p.price;
        }
        // round to 2 decimal places
        order.subTotal = Math.round(order.subTotal*100)/100;

        // discounts cant be greater than subTotal
        order.discount = this.chance.floating({fixed:2, min: 0, max: order.subTotal});

        // order total equals product totals minues discounts, round to two decimal places
        order.total = Math.round((order.subTotal - order.discount)*100)/100;
        return order;
      }
    });
    const orders = [];

    // create orders and insert into orders array
    for(let i = 0; i < amount; i++){
      orders.push(this.chance.order(max, products));
    }
    return orders;

  }
}

angular.module('mockStore', ['chance', 'ngLodash'])
.service('MockStore', MockStoreService);