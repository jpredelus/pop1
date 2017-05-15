'use strict';

class LoginController {
  constructor(Auth, $state, $mdDialog) {
    this.user = {};
    this.errors = {};
    this.submitted = false;

    this.Auth = Auth;
    this.$state = $state;
    this.cancel = ()=> {
      $mdDialog.cancel();
    };
  }

  login(form) {
    this.submitted = true;
    this.loading = true;
    if (form.$valid) {
      this.Auth.login({
          email: this.user.email,
          password: this.user.password
        })
        .then(() => {
          // Logged in, redirect to store
          this.$state.go('store');
          this.cancel();
        })
        .catch(err => {
          this.errors.other = err.message;
          this.loading = false;
        });
    }
  }
}

angular.module('paquetApp')
  .controller('LoginController', LoginController);
