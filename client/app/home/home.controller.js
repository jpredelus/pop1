'use strict';


class HomeController {
    constructor($scope) {
        const onLeaveFn = (idx, netidx, direction) => {
            if(idx === '3' && direction === 'down') {
                
            }
            if(idx === '3' && direction === 'down') {
                
            }
        };
        this.options = { navigation : true, onLeave : onLeaveFn};
    }
}

angular.module('paquetApp.home')
    .controller('HomeController', HomeController);