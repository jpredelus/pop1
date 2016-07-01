'use strict';

function ParallaxService ($rootScope, scrollMagic, $window, $location) {
    const slides = angular.element('.slides');
    const p = {
        slideID(){
            return ($location.hash() !== '') ? $location.hash() : 'one';
        },

        //Does transition animation from one slide to the next
        slideTransition(currentSlide, elemClass = '.slides', move = 1, updateUrl = true){
                // Index and id of the next slide in the slides aray
                console.log(currentSlide);
                const nextIdx = _.findIndex(slides, (e) => e.id === currentSlide) + move;
                const nextID = slides[nextIdx].id;

                // new y position of next slide for the animation (should be 100% or -100%)
                const newpos = (slides[nextIdx].offsetTop - 51)* move * -1;
                console.log(newpos);
                // animate slide transition
                TweenMax.to('#' + nextID, 0.3, {y: newpos, ease: Power1.easeOut});
                if (updateUrl) {
                    $location.hash(nextID);
                    $rootScope.$apply();
                }
            },
        // For Multiple slide transitions between two slides for example from slide one to three
        slideFromTo(start, end) { 
            const startIdx = _.findIndex(slides, (e) => e.id === start);
            const endIdx = _.findIndex(slides, (e) => e.id === end);
            const delta = (startIdx > endIdx) ? 1 : -1;
            let idx = startIdx;

            for (let i = 0; i < startIdx; i++) {
                p.slideTransition(slides[idx], undefined, delta, false);
                idx += delta;
            }

            $location.hash(end);
        }
    };

    return p;

}

angular.module('paquetApp.parallax')
    .factory('parallax', ParallaxService);