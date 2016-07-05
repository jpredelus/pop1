'use strict';


class HomeController {
    constructor($scope) {
        this.options = { navigation : true};
    }
}

angular.module('paquetApp.home')
    .controller('HomeController', HomeController);