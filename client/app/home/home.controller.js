'use strict';


class HomeController {
    constructor(ScrollMagicService, scrollMagic, $window, $timeout) {
        this.sm = ScrollMagicService;
        const controller = new ScrollMagic.Controller();

        // create scene to pin and link animation
        new ScrollMagic.Scene({
                triggerElement: '.pin',
                triggerHook: 'onLeave',
                duration: 0
            })
            .setPin('.pin')
            .addIndicators() // add indicators (requires plugin)
            .addTo(controller);


        $timeout( () => TweenMax.to('#two', .3, {y: '-100%', ease: Power1.easeOut}), 1000);

    }


}

angular.module('paquetApp.home')
    .controller('HomeController', HomeController);