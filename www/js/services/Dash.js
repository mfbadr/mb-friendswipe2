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

  //call to see swiped users here
  function swipe(swipeObj){
    return $http.post(origin + '/newswipe', swipeObj);
  }

  return {register: register, swipe:swipe};

}]);

