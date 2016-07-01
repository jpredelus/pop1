'use strict';


class HomeController {
    constructor(parallax) {
        const p = parallax;
        this.slides = angular.element('.slides');
        
        const options = {leading: true, trailing: false};
        angular.element(document).on('scroll', _.debounce(() => p.slideTransition(p.slideID()), 1000, options));
        this.slides.toArray().forEach(function (s) {
            console.log(s.offsetTop);
        });

    }





}

angular.module('paquetApp.home')
    .controller('HomeController', HomeController);