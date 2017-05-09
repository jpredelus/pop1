'use strict';

angular.module('paquetApp.admin')
  .config(function($stateProvider) {
    $stateProvider.state('admin', {
      parent: 'root',
      url: '/admin',
      views:{
        '@': {
          templateUrl: 'app/admin/admin.html',
          controller: 'AdminController',
          controllerAs: 'admin'
            }
        },
      authenticate: 'admin'
    });
  });
