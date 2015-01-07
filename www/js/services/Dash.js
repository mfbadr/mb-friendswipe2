angular.module('mb-friendswipe')
.factory('Dash',['$http', 'origin', function($http, origin){
  'use strict';
  // register user
  //send swipe
  function register(user){
    var userObj = {name: user.name, id: user.id};
    console.log('user data from dash factory', userObj);
    return $http.post(origin + '/register', userObj);
  }

  return {register: register};

}]);

