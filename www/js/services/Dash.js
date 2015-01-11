angular.module('mb-friendswipe')
.factory('Dash',['$http', 'origin', function($http, origin){
  'use strict';
  // register user
  function register(user){
    var userObj = {name: user.name, id: user.id};
    console.log('user data from dash factory', userObj);
    return $http.post(origin + '/register', userObj);
  }

  //send swipe
  function swipe(swipeObj){
    return $http.post(origin + '/newswipe', swipeObj);
  }

  //call to see swiped users here
  function getSwipes(id){
    return $http.post(origin + '/getswipes', {id: id});
  }

  return {register: register, swipe:swipe, getSwipes:getSwipes};

}]);

