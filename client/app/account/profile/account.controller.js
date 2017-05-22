class AccountController {

  constructor(lodash, MockStore) {
    this.tabs = [
    {name: 'Profile', class: {'md-raised': true, 'md-accent': true}},
    {name: 'Orders', class: {'md-raised': false, 'md-accent': false}},
    {name: 'Shipping Info', class: {'md-raised': false, 'md-accent': false}}
    ];
    this.orders = MockStore.createOrders(4,3);
    this.selected = 'Profile';

     this.states = ('AL AK AZ AR CA CO CT DE FL GA HI ID IL IN IA KS KY LA ME MD MA MI MN MS ' +
    'MO MT NE NV NH NJ NM NY NC ND OH OK OR PA RI SC SD TN TX UT VT VA WA WV WI ' +
    'WY').split(' ');

    this.select = (idx) => {
      const selTab = this.tabs[idx];
      this.selected = selTab.name;
      // Make all other tab class properties false
      for(let tab of this.tabs) {
        tab.class = lodash.mapValues(tab.class, ()=> false);
      }
      // Make selected tab class properties true
      selTab.class = lodash.mapValues(selTab.class, ()=> true);
    };

  }



}

angular.module('paquetApp')
  .controller('AccountController', AccountController);