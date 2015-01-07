angular.module('mb-friendswipe')
.factory('Match',['$http', 'origin', function($http, origin){
  'use strict';
  // register user
  //send swipe
  function matches(userId){
    return $http.post(origin + '/matches', {id: userId});
  }

  //call to see swiped users here

  return {matches: matches};

}]);

