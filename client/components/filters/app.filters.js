'use strict';

angular.module('paquetApp.filters', ['angularMoment'])
.filter('dateRange', (moment)=> {
  return function(items, start, end) {
    const collection = [];
    for(let i of items) {
      let d = moment(i.date);
      if (d.isAfter(start) && d.isBefore(end)) {
        collection.push(i);
      }
    }
    return collection;
  };
})