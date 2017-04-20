'use strict';

class NavbarController {
  //end-non-standard

  //start-non-standard
  constructor(Auth, $location) {
    this.isPath = (path) => path === $location.path().replace('/','');
    this.isLoggedIn = Auth.isLoggedIn;
    this.isAdmin = Auth.isAdmin;
    this.getCurrentUser = Auth.getCurrentUser;
    this.getTheme = () => this.isPath('home') ? 'navdark' : 'navbar';
  }

}

angular.module('paquetApp')
  .controller('NavbarController', NavbarController);
