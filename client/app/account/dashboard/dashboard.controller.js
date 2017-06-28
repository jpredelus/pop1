class DashboardController {
  constructor(lodash) {
    this.tabs = [
    {name: 'Orders', class: {'md-raised': false, 'md-accent': false}},
    {name: 'Products', class: {'md-raised': true, 'md-accent': true}},
    {name: 'Profile', class: {'md-raised': false, 'md-accent': false}}
    ];
    this.selected = 'Products';
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
  .controller('DashboardController', DashboardController);