'use strict';


class HomeController {
    constructor($scope) {
        const onLeaveFn = (idx, netidx, direction) => {
            console.log('Hey');
            if(idx === '3' && direction === 'down') {
                console.log(idx, direction);
            }
            if(idx === '3' && direction === 'down') {
                console.log(idx, direction);
            }
        };
        this.options = { navigation : true, onLeave : onLeaveFn};
    }
}

angular.module('paquetApp.home')
    .controller('HomeController', HomeController);