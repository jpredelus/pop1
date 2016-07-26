'use strict';

class NavbarController {
  //end-non-standard

  //start-non-standard
  constructor(Auth, $location) {
    this.isPath = (path) => path === $location.path().replace('/','');
    this.isLoggedIn = Auth.isLoggedIn;
    this.isAdmin = Auth.isAdmin;
    this.getCurrentUser = Auth.getCurrentUser;
  }

}

angular.module('paquetApp')
  .controller('NavbarController', NavbarController);
