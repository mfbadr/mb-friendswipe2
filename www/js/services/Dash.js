angular.module('mb-friendswipe')
.factory('Dash',['$http', 'origin', function($http, origin){
  'use strict';
  // register user
  //send swipe
  function register(user){
    console.log('user data from dash factory', user);
    return $http.post(origin + '/register', user);
  }

  return {register: register};

}]);

