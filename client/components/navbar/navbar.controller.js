'use strict';

class NavbarController {
  //end-non-standard

  //start-non-standard
  constructor(Auth, $location, $mdDialog, $state) {
    this.isPath = (path) => path === $location.path().replace('/','');
    this.isLoggedIn = Auth.isLoggedIn;
    this.isAdmin = Auth.isAdmin;
    this.getCurrentUser = Auth.getCurrentUser;
    this.getTheme = () => this.isPath('home') ? 'navdark' : 'navbar';
    this.stateName = $state.current.name;
    this.login = (ev) => {
      $mdDialog.show({
        controller: 'LoginController',
        controllerAs: 'login',
        templateUrl: 'app/account/login/loginModal.html',
        parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose:true,
        fullscreen: false,
        onRemoving: (ev, promise) => {
            console.log('closing');
            this.stateName = $state.current.name;
          }
      });
    };

  }
}

angular.module('paquetApp')
  .controller('NavbarController', NavbarController);
