'use strict';

function Parallax (scrollMagic) {
    return {
        restrict: 'E',
        link: (scope, elem) => {
            const controller = new ScrollMagic.Controller();

            // create scene to pin and link animation
            new ScrollMagic.Scene({
                    triggerElement: elem,
                    triggerHook: 'onLeave',
                    duration: 0
                })
                .setPin(elem)
                .addIndicators() // add indicators (requires plugin)
                .addTo(controller);

        }
    };
}

angular.module('paquetApp.parallax')
    .directive('parallaxFrame', Parallax);
