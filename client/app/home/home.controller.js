'use strict';


class HomeController {
    constructor($scope, $timeout) {
        $scope.firstLoad = true;
        
        // used to determine whether an animation should be applied
        this.scrollCheck = (page, direction = null) => {
            if (!direction) {
                return page === $scope.page || $scope.firstLoad;
            }
            else {
                return (page === $scope.page && direction === $scope.dir) || $scope.firstLoad;
            }
        };

        const afterLoadFn = (anchorLink, index, slideAnchor, slideIndex) => {
            $timeout( () => {
                const lastidx = $scope.page;
                $scope.page = index;
                $scope.dir= lastidx > $scope.page && angular.isNumber(lastidx) ?  'up' : 'down';
                $scope.firstLoad = false;
            });
        };

        this.options = { navigation : true, afterLoad : afterLoadFn};
    }
}

angular.module('paquetApp.home')
    .controller('HomeController', HomeController);