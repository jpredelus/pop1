'use strict';


class HomeController {
    constructor($scope, $timeout) {
        $scope.firstLoad = true; // used to determine if afterLoad callback has been called

        /**
         * Function that is fired after slide loads
         * Updates scope.idx to the current section's index
         * also updates the direction of the most recent transition. 
         * 
         * @param  {[string]} anchorLink - anchor link corresponding to the section.
         * @param  {[int]} index - index of the section. Starting from 1.
         * @param  {[string]} slideAnchor - anchor corresponding to the slide (in case there is)
         * @param  {[type]} slideIndex - index of the slide. Starting from 1. (the default slide doesn't count as slide, but as a section)
         */
        function afterLoadFn  (anchorLink, index, slideAnchor, slideIndex)  {
            $timeout( () => {
                const lastidx = $scope.idx;
                $scope.idx = index;
                $scope.dir= lastidx > $scope.idx && angular.isNumber(lastidx) ?  'up' : 'down';
                $scope.firstLoad = false;
            });
        }

        /**
         * Checks whether params match the current section's index and the direction 
         * of the previous transition. If the $scope.firstLoad is true then the function will 
         * return true regardless of params.
         * 
         * @param  {[int]} idx - The index of the section
         * @param  {[string]} direction - direction of the previous section transition can be "up" or "down",
         * If null there is no check.
         * 
         * @return {[boolean]} true if params match or if afterLoadfn has not been called atleast once.
         */
        function sectionCheck (idx, direction = null) {
            if (!direction) {
                return idx === $scope.idx || $scope.firstLoad;
            }
            else {
                return (idx === $scope.idx && direction === $scope.dir) || $scope.firstLoad;
            }
        }

        /**
         * Creates an object for ng-class to use to determine whether to add
         * a class to an element or not. This is used for css animations.
         * 
         * @param  {[type]} idx - Index of what the current section index should be for the class to be added
         * 
         * @param  {[string]} up - The name of the class that should be added if the transition direction is up.
         * This will also be added when going down if down is null
         * 
         * @param  {[type]} down - same as up except for the down direction, if null direction is ignored and 
         * up class is added regardless of direction.
         * 
         * 
         * @param  {String} exit - the name of the class that should be added after exiting a section. The default is fadeOut
         * since the animation will not be seen.
         * 
         * @return {[object]} A dictionary of the class names and booleans. If a class's value is true 
         * the class is added to the element
         */
        function animator (idx, up, down = null, exit = 'fadeOut') {
            if (down) {
                return {
                    [up]: sectionCheck(idx, 'up'),
                    [down]: sectionCheck(idx, 'down'),
                    [exit]: !sectionCheck(idx)
                };
            } else {
                return {[up]: sectionCheck(idx), [exit]: !sectionCheck(idx)};
            }
        }

        this.animator = animator; // so that the view can access the animator function

        //options for fullpagejs module
        this.options = { 
        navigation : true, 
        afterLoad : afterLoadFn,
        scrollingSpeed: 500
        }; 
    }
}

angular.module('paquetApp.home')
    .controller('HomeController', HomeController);