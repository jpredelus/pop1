class ProfileController {

  constructor(lodash, MockStore) {
    this.tabs = [
    {name: 'Profile', class: {'md-raised': false, 'md-accent': false}},
    {name: 'Orders', class: {'md-raised': true, 'md-accent': true}},
    {name: 'Shipping Info', class: {'md-raised': false, 'md-accent': false}}
    ];

    this.selected = 'Orders';

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
  .controller('ProfileController', ProfileController);